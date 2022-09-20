# Demo Test Automation

## Prerequisites

Go to terminal and specific package.
Ensure lerna is installed
perform lerna clean with below command

```bash
% lerna clean --yes
```

## Install Dependencies

Go to terminal in Visual studio code
Install NPM packages by executing the command in terminal

Install dependencies for all packages

```bash
% lerna bootstrap
```

## Build

Build all packages

```bash
% lerna run build
```

## Run the tests

Current framework is setup to run all the tests/test scenarios/ features with @Test annotation.

To run the tests

```bash
% node build/run.js
```
