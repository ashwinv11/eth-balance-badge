const Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(Web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const address = '0x809d4A2cc57C3fbF7C5DE41Ac99D525CC7C69B0f';
const balance = web3.eth.getBalance(address);
const eth = web3.fromWei(balance, 'ether');

console.log(`${address} has ${eth} ether`);
