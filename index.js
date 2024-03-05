const { ethers } = require('ethers');

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    console.log(`Wallet Address: ${wallet.address}`);
    console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
    console.log(`PKey: ${wallet.privateKey}`);
}

module.exports = { createWallet };
