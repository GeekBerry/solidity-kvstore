// const KVStore = require('@geekberry/solidity-kvstore');
const KVStore = require('../');

async function main() {
  const kvStore = new KVStore({
    // url: 'http://testnet-jsonrpc.conflux-chain.org:12537', // conflux test-net
    url: 'http://localhost:12537',

    // account must be privateKey for deploy
    // this account will be admin of this database
    account: '0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',

    logger: console, // for debug
  });

  // get address
  const address = await kvStore.constructor(); // deploy the contract
  console.log(address); // 0x8bfc6fd9437cf1879fb84aade867b6e81efb5631
}

main();
