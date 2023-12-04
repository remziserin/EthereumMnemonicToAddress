const ethers = require('ethers')

async function mnemonicToAddress(mnemonic){

  const  private_key = ethers.Wallet.fromMnemonic(mnemonic)._signingKey().privateKey
  const  address = ethers.Wallet.fromMnemonic(mnemonic)

    console.log("Private Key =>",private_key);
    console.log("Ethereum Address =>",address);

}

mnemonicToAddress("Mnemonic 12 phrases")