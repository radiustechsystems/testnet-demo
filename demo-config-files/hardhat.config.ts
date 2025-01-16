import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-ignition-ethers";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  ignition: {
    requiredConfirmations: 0
  },
  solidity: {
   compilers: [
     {
       version: "0.8.28",
     },
   ],
 },
 defaultNetwork: "radius",
 networks: {
   radius: {
     url: "<your-agent-rpc-url>",
     accounts: ["<your-private-key>"]
   }
 }
};

export default config;
