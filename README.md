# aws-service-utils

## What is aws-service-utils?

This package is a ever growing collection of aws functionalities written in typescript available to you in form of utils

## Contribution

Currently this package only supports secretsmanager service. Expect others in future versions


## Installation

```sh
$ npm i aws-service-utils
```

## Usage

```js
const { secretsManager } = require('aws-service-utils').services;

async function getConfig() {
    const secret = await secretsManager.getSecret({
        secretName: 'secretName',
        region: 'ap-south-1'
    });
    return secret;
}
```