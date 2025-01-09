# testnet-demo

This guide runs through provisioning an RPC endpoint, using the faucet to mint tokens, and setting up your local environment to interact with the Radius Testnet using Hardhat and MetaMask.  

## RPC Endpoint
The first step to engaging the the testnet is provisioning an RPC endpoint. We're currently in invite-only mode, so you'll need to request an invite from the Radius team. Once you have an invite, you can provision an RPC endpoint from the dashboard:

https://testnet.tryradi.us/

## Faucet

Once you have an RPC endpoint, you can use the faucet to mint tokens: 

https://testnet.tryradi.us/faucet.

## Explorer

The explorer is a tool for inspecting transactions on the Radius Testnet. It is currently in development, but you can find the latest version here:

https://testnet.tryradi.us/explorer.

## MetaMask

Within the dashboard, you can also find instructions for configuring MetaMask.

## Hardhat

To interact with the Radius Testnet using Hardhat, you'll need to install the Hardhat package and the ethers package.

```console
$ npm install @nomicfoundation/hardhat-ethers ethers
$ npm install hardhat
```

## Deploying a Contract

To deploy a contract, you'll need to create a Hardhat configuration file.

```console
$ npx hardhat
```

This will create a `hardhat.config.js` file in your project directory.

Edit the `url:` value in the `hardhat.config.js` file to correspond with the url of the agent RPC server.

You should now be able to use the Hardhat console.

```console
$ npx hardhat console
```

For more information about Hardhat and smart contract deployment,
browse the [Hardhat getting started guide](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start).
