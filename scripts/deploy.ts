import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';

dotenv.config();

async function main() {
  const UniswapV2Factory = await ethers.getContractFactory('UniswapV2Factory');
  const uniswapV2Factory = await UniswapV2Factory.deploy(
    process.env.FEE_TO_SETTER || '',
  );

  await uniswapV2Factory.deployed();

  console.log('UniswapV2Factory deployed to: %s', uniswapV2Factory.address);

  const pairCodeHash = await uniswapV2Factory.pairCodeHash();
  console.log('Pair code hash: %s', pairCodeHash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
