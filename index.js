// import '@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol';
// import IUniswapV2Router02 from '@uniswap/v2-periphery/build/IUniswapV2Router02.json';
require('dotenv').config();
const router2 = require('./router2.json');
const config = require('./config.json');
const ethers = require('ethers');
const dotenv = require('dotenv');

const privateKey = process.env.PRIVATE_KEY;
console.log(privateKey);

const rpcNode = process.env.PROVIDER;
console.log(rpcNode);

const provider = new ethers.JsonRpcProvider(process.env.PROVIDER);
const wallet = new ethers.Wallet(privateKey, provider);

async function getBalanceETH() {
    const balance = await provider.getBalance(wallet.address);
    const balanceInEth = ethers.formatEther(balance);
    console.log(balanceInEth);
    return balanceInEth;
}

console.log(balanceInEth);

// async function getPrice (mainAddress, token, amountIn) {
//     const contract = new Contract(dexAddress, abi , provider);
//     const amountOut = await damn.
// }