# Etäsitsit Frontend
[![Build Status](https://jenkins.alatvala.fi/job/TiK15Ryyb/job/etasitsit-frontend/job/master/badge/icon)](https://jenkins.alatvala.fi/job/TiK15Ryyb/job/etasitsit-frontend/job/master/)
[![Quality Gate](https://sonar.alatvala.fi/api/badges/gate?key=etasitsit-frontend)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Lines](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=lines)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Percentage of comments](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=comment_lines_density)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Complexity to function](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=function_complexity)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Test errors](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=test_errors)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Test failures](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=test_failures)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Test success density](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=test_success_density)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Unti Test Coverage](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=coverage)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Duplicated Lines Density](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=duplicated_lines_density)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Blocker Violations](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=blocker_violations)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Critical Violations](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=critical_violations)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Code Smells](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=code_smells)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Bugs](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=bugs)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Vulnerabilities](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=vulnerabilities)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![Technical Debt Ratio](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=sqale_debt_ratio)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![New Maintainability Rating](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=new_maintainability_rating)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![New Reliability Rating](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=new_reliability_rating)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)
[![New Security Rating](https://sonar.alatvala.fi/api/badges/measure?key=etasitsit-frontend&metric=new_security_rating)](https://sonar.alatvala.fi/dashboard/index/etasitsit-frontend)

This repository holds the open source code for Etäsitsit Frontend

## How do I get set up?

These steps primarily apply to a non-Windows platform, but it is absolutely possible developing on Windows too.

* Have [yarn installed](https://yarnpkg.com/lang/en/docs/install).
* Have [git installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* (Optional) Have [Docker CE installed](https://docs.docker.com/install/#supported-platforms)
* (Optional, but highly recommended) Configure your editor of choice to use [ESLint](https://eslint.org/docs/user-guide/getting-started).
    * For ([Neo](https://github.com/neovim/neovim/wiki/Installing-Neovim))[Vim](https://www.vim.org/download.php) (non-neo >=8), using [Worp/Ale](https://github.com/w0rp/ale#3-installation) is highly recommended. For first time vim users, using this in conjunction with [Vim Bootstrap](https://vim-bootstrap.com/) might be a good start.
    * For [Visual Studio Code](https://code.visualstudio.com/Download), using [ESLint from the marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) is highly recommended.
    * For emacs users, `> using emacs`
* Clone this repository i.e.

```sh
git clone git@github.com:TiK15Ryyb/etasitsit-frontend.git
```

* cd into the cloned folder i.e.

```sh
cd etasitsit-frontend
```

* Install project dependencies i.e.

```sh
yarn install
```

* Start the appliaction, defaults to `0.0.0.0:3000` which can be accessed by visiting [localhost:3000](http://localhost:3000) i.e.

```sh
yarn start
```

## CI/CD

When making pull requests and branches, [Jenkins](https://jenkins.io/) will run an [automated CI/CD pipeline](https://jenkins.bitsaber.net/job/TiK15Ryyb/job/etasitsit-frontend/job/master/), using technologies such as [SonarQube](https://sonar.alatvala.fi/dashboard?id=etasitsit-frontend), [Robot Framework](https://robotframework.org/) and [Selenium](https://www.seleniumhq.org/), to name a few. This assures a baseline for code quality. Jenkins delivers the [CI/CD Pipeline](https://www.edureka.co/blog/ci-cd-pipeline/) results to GitHub, and this will assist in preventing the merging of suboptimal code into protected branches.

### Jenkins Pipeline

An image of the current CI/CD pipeline is presented below

TBD

## Running Robot Tests Outside Jenkins

These commands are assumed to be run from the root directory of this repository.

_outside docker_ Start the docker container:

```sh
docker run \
    --name jenkins-docker-robot-chrome \
    -v $(pwd):/home/jenkins/etasitsit-frontend \
    --rm \
    -d \
    --privileged \
    docker.alatvala.fi/devops/jenkins-chrome-71:latest
```

_outside docker_ Attach to it:

```sh
docker exec -it jenkins-docker-robot-chrome su - jenkins
```

_inside docker_ Configure PATH and start dev server:

```sh
PATH="/opt/tools/yarn/yarn-v1.12.3/bin:/opt/tools/nodejs/node-v11.4.0-linux-x64/bin:$PATH"
cd etasitsit-frontend
yarn start &>/dev/null &
```

_inside docker_ Run robot:

```sh
robot -d robot_reports __tests__/robot
```

_outside docker_ Stop the docker image:

```sh
docker stop jenkins-docker-robot-chrome
```

## Authors

[BitSaber](https://github.com/TiK15Ryyb/etasitsit-frontend/graphs/contributors)
