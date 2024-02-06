require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5,
      gasPrice: 30000000000
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    player: {
      default: 1,
    },
  },
  gas: 210000,
  gasPrice: 800000000,
  solidity: {
    compilers: [
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      },
    ]
  },
  mocha: {
    timeout: 200000,
  },
};
