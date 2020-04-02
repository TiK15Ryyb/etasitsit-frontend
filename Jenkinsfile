def safeBranchName = "there/is_some:kind!of~error.."
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
                sh 'yarn test'
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
        stage('Deploy') {
            steps {
                script {
                    safeBranchName = env.BRANCH_NAME.replaceAll("[^a-zA-Z0-9]+","_")
                }
                withCredentials([sshUserPrivateKey(credentialsId: "JENKINS_MASTER_SSH", keyFileVariable: 'keyfile')]) {
                    print "Validating branch name '${safeBranchName}'"
                    sh "[ -n '${safeBranchName}' ]"
                    sh "ssh -i '${keyfile}' -o StrictHostKeyChecking=no jenkins-autodeploy@tik15ryyb.alatvala.fi uptime"
                    sh "ssh -i '${keyfile}' jenkins-autodeploy@tik15ryyb.alatvala.fi 'rm -rf /var/www/tik15ryyb/${safeBranchName} || true'"
                    sh "scp -i '${keyfile}' -r dist jenkins-autodeploy@tik15ryyb.alatvala.fi:/var/www/tik15ryyb/${safeBranchName}"
                }
            }
        }
        stage('Publish Artifacts') {
            when {
                expression { GIT_BRANCH == 'master' }
            }
            steps {
                script {
                    rtUpload (
                        serverId: 'VonLatvala Artifactory',
                        specPath: 'artifactFilespec.json',
                        failNoOp: true
                    )
                    rtPublishBuildInfo (
                        serverId: 'VonLatvala Artifactory',
                    )
                }
            }
        }
    }
}
