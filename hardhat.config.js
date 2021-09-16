require("@nomiclabs/hardhat-waffle");

module.exports = {
  network: {
    hardhat: {
      chaiId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFRA_ID}`,
      accounts: [process.env.M_KEY],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFRA_ID}`,
      accounts: [process.env.M_KEY],
    },
  },
  solidity: "0.8.4",
};
