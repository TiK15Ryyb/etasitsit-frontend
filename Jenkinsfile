pipeline {
    agent {
        label 'nodejs'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'yarn test || true'
            }
        }
        stage('Static code analysis') {
            steps {
                withSonarQubeEnv('VonLatvala Sonar') {
                    script {
                        scannerHome = tool 'SonarScanner 4.0.0.1744'
                    }
                    sh "${scannerHome}/bin/sonar-scanner" +\
                        " -Dsonar.branch.name=\"${env.BRANCH_NAME}\""
                }
            }
        }
        stage("Quality Gate") {
            steps {
                timeout(time: 10, unit: 'MINUTES') {
                    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
                    // true = set pipeline to UNSTABLE, false = don't
                    // Requires SonarQube Scanner for Jenkins 2.7+
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Linter') {
            steps {
                sh 'yarn lint'
            }
        }
        stage('Build Project') {
            steps {
                sh 'yarn package'
            }
        }
        stage('Publish Artifacts') {
            when {
                expression { GIT_BRANCH == 'master' }
            }
            steps {
                sh 'echo disabled'
                /*script {
                    rtUpload (
                        serverId: 'VonLatvala Artifactory',
                        specPath: 'artifactFilespec.json',
                        failNoOp: true
                    )
                    rtPublishBuildInfo (
                        serverId: 'VonLatvala Artifactory',
                    )
                }*/
            }
        }
/*        stage('Robot Tests') {
            environment {
                PATH = "$PATH:/opt/chromedriver/"
            }
            steps {
                sh 'cp -r dist heroku_docker/app'
                sh 'docker build --tag incy-io-kiosk-frontend .'
                sh 'docker run -d --name incy-io-kiosk-frontend -p 3000:3000 incy-io-kiosk-frontend'
                sh 'robot -d robot_reports __tests__/robot'
                sh 'docker stop incy-io-kiosk-frontend'
                step([
                    $class : 'RobotPublisher',
                    outputPath: "./robot_reports/",
                    outputFileName : "output.xml",
                    disableArchiveOutput : false,
                    reportFileName: "report.html",
                    logFileName: "log.html",
                    passThreshold : 100,
                    unstableThreshold: 95.0,
                    otherFiles : "*.png"
                ])
            }
        }*/
    }
}
