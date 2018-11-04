console.log('Zombie Factory App loaded 100%')

if (typeof window.web3 !== 'undefined') {
  var web3 = new Web3(window.web3.currentProvider);
} else {
 // set the provider you want from Web3.providers
  var web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
}

var cryptoZombiesABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"zombies","outputs":[{"name":"name","type":"string"},{"name":"dna","type":"uint256"},{"name":"level","type":"uint32"},{"name":"readyTime","type":"uint32"},{"name":"winCount","type":"uint16"},{"name":"lossCount","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"zombieToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"zombieId","type":"uint256"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"dna","type":"uint256"}],"name":"NewZombie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"createRandomZombie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var contractAddress = "0x6c6d8677803aa9ce5fef3e900edadbde42a7d18a";

console.log("Web Functions: ")
console.log(web3);

var accounts = web3.eth.getAccounts()
console.log("Accounts: ")
console.log(accounts)

var version = web3.version;
console.log("Web3js Version: "+version); 