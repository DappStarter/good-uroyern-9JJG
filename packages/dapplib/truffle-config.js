require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit foot fire dash tortoise purity hotel light army gasp'; 
let testAccounts = [
"0xe18d82c07cbc54ff48e9fe1c2a5416dbe8edd6da36671ff510f3a169d4715a1a",
"0x74ad7a260ac65df7f182af9e697289ae4f71d0b18cdad59ebdddf387d93061f7",
"0xbbc64b87dcfc6eb81d5a5546e092759e47baf79544d55ab43f5715bfede80bff",
"0xa681a078007b1a0e87d8556fb7ee9411b847f171394dd44e8c15824bc584de7a",
"0x9137e70fa27cbfabbcb7906397b3a49d7f21b9ea7e71f72d0a8bdf51384795ca",
"0xfab9103fb51ef8a0097a5e28b10cb8c858fce6ccdcaafa73d2170f88083faf2f",
"0x2e0f9346dabd6ace28ffc05affb0eb56920cad5904cbe27e15a1fb0bb7270018",
"0x34554fb30c1c20f471f57ab1482a06f417e97fdd45df5e831783841cc41c1b89",
"0x38f7953366a734089b37e0cd8ea866f487ab19ddba2b13d7e1fb57672cec0ca5",
"0x50ab4abac8eac35bc84f131cdb68c03a8916fb37f236b4a3a8fc9fa53cd27acb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


