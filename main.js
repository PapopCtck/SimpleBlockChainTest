const {Blockchain,Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('04fb80c1f3ac0f08220dee3dadbdb8cef37de93492ad350eef409cb5fce6fc50');
const myWalletAddress = myKey.getPublic('hex');

let xCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress,'public key goes here',10);
tx1.signTransaction(myKey);
xCoin.addTransaction(tx1);

// xCoin.createTransaction(new Transaction('address1','address2',100));
// xCoin.createTransaction(new Transaction('address2','address1',50));
console.log('Starting miner... \n');
xCoin.minePendingTransactions(myWalletAddress);
console.log('\n Balance of x is', xCoin.getBalanceOfAddress(myWalletAddress));
// console.log(JSON.stringify(xCoin,null,4));
// console.log('Starting miner again... \n');
// xCoin.minePendingTransactions('x-address');
// console.log('\n Balance of x is', xCoin.getBalanceOfAddress('x-address'));
// console.log(JSON.stringify(xCoin,null,4));
// console.log('Block 1 ...')
// xCoin.addBlock(new Block(1,"17/10/2018",{amount: 4}));
// console.log('Block 2 ...')
// xCoin.addBlock(new Block(2,"17/10/2018",{amount: 5}));

// console.log('is blockchain valid? '+ xCoin.isChainValid());

// xCoin.chain[1].data = {amount: 100};
// xCoin.chain[1].hash = xCoin.chain[1].calculateHash();
// xCoin.chain[1].transactions[0].amount = 1;
console.log('is blockchain valid? '+ xCoin.isChainValid());
// console.log(JSON.stringify(xCoin,null,4));