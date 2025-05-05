// https://eth-goerli.g.alchemy.com/v2/iF3TWvfH8AqMeh1O90LB2xM9K78CjkEQ

require('@nomiclabs/hardhat-waffle');

require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Jre5kqbwJBNF7gyouwSX3ddRmoJvWWDQ',
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};