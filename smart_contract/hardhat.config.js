require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/s7c71oIHBxOSeItKeL8Rsv-xWEVkrRf1',
      accounts: ['a7a9bfc914c4f13e4df85a73f2a336fc51ac7ff7104ba53c339c13a738dc1b31']
    }
  }
}