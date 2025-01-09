# testnet-demo

This guide runs through provisioning an RPC endpoint, using the faucet to mint tokens, and setting up your local environment to interact with the Radius Testnet using Hardhat and MetaMask.  

## RPC Endpoint
The first step to engaging the the testnet is provisioning an RPC endpoint. We're currently in invite-only mode, so you'll need to request an invite from the Radius team. Once you have an invite, you can provision an RPC endpoint from the dashboard:

https://testnet.tryradi.us/

## Faucet

Once you have an RPC endpoint, you can use the faucet to mint tokens: 

https://testnet.tryradi.us/dashboard/faucet.

## Explorer

The explorer is a tool for inspecting transactions on the Radius Testnet. It is currently in development, but you can find the latest version here:

https://testnet.tryradi.us/dashboard/explorer.

## MetaMask

Within the dashboard, you can also find instructions for configuring MetaMask.

## Hardhat

To interact with the Radius Testnet using Hardhat, you'll need to install the Hardhat package and the ethers package.

```console
$ npm i
$ npm i -g hardhat
```

## Deploying a Contract

To deploy a contract, you can copy the `hardhat.config.ts` file from the `demo-config-files` directory and edit the `url:` value to correspond with the url of the agent RPC server as well as the `accounts:` value to correspond with the private key of your wallet.

```console
$ cp demo-config-files/hardhat.config.ts hardhat.config.ts
```

Next, you can deploy a contract using the Hardhat CLI. In this example, we're going to compile and deploy the `Lock` contract from the `ignition` directory.
```console
$ npx hardhat compile
$ npx hardhat ignition deploy ./ignition/modules/Lock.js
```

For more information about Hardhat and smart contract deployment,
browse the [Hardhat getting started guide](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start).
