# UI and API tests using [Cypress](https://docs.cypress.io) and [Typescript](https://www.typescriptlang.org/)

### Prerequisites

> Nodejs 9.x (Install Nodejs 9.x using [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/))
>
> [yarn](https://yarnpkg.com/en/)
>
> [Java 1.6](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or higher
>
> [allure-commandline](https://www.npmjs.com/package/allure-commandline)
>
> Note: Java and allure-commandline is required for allure reporting. If you use other report, you can ignore Java and allure

### Steps to build and run sample tests

##### Clone `cypress-tests` repository

```
git clone git@github.com:a5g/cypress-tests.git
```

##### Go to `cypress-tests` folder

```
cd cypress-tests
```

##### Install required node_modules

```
yarn install (or)
npm install
```

##### Run default test using following command

```
yarn test (or)
npm test

[This would run a sample test (in headless mode) configured in package.json]

To run tests with head mode

yarn test -b chrome  (or)
npm test -b chrome
```

##### cypress.json (cypress-tests/cypress.json)

> - contains all default config for page tests
> - if any change is required, one can update this file and re-run tests

##### cypress.json - sample

```
{
  "chromeWebSecurity": false,
  "supportFile": "cypress/support/index.js",
  "defaultCommandTimeout": 15000,
  "pageLoadTimeout": 30000,
  "watchForFileChanges": false,
  "video": true,
  "reporter": "mocha-allure-reporter",
  "reporterOptions": {
    "targetDir": "target/allure-results"
  },
  "env": {
    "env": "",
    "timeout": 0
  }
}

```

##### Configuring cypress environment variable at run time

> Cypress environment variables can be modified using -e or --env in command line
>
> For more details refer to [cypress command line](https://docs.cypress.io/guides/guides/command-line.html#cypress-run).

##### Environments

> Page tests can be run against following environments
>
> - dev
> - staging
> - prod

##### Choosing an environment

> By default, prod environment is used for page tests.
>
> To change the environment, use below command
>
> yarn test -e env=[envname]
>
> eg., to run tests in dev
>
> - yarn test -e env=dev

#### Running tests in developer mode

```
yarn open (or)
npx cypress open

[This would open cypress UI. Developer can make use of it to run and debug tests]
```

#### Test Reports

> Once the test execution is done, reports can accessed by following command
>
> yarn report (or)
>
> npm run report
>
> press ctrl + c to exit report
