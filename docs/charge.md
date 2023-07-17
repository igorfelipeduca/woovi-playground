# Customer

This following documentation is related to the [Customer module](https://developers.woovi.com/api#tag/customer) inside Woovi's OpenPix API.

## Available scripts

### Create charge

The create charge command needs some parameters to work.

| Parameter     | Definition                            |
| ------------- | ------------------------------------- |
| CorrelationID | Token that refers to another document |

Running with Yarn

```bash
yarn es src/scripts/create-customer.ts {correlationID}
```

Running with NPM

```bash
npm run es src/scripts/create-customer.ts {correlationID}
```

**Replace the {correlationID} with a real correlationID**

An example of correlationID can be seen at [create customer](./customer.md) response.
