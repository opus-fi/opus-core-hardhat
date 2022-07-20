import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.6.12',
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_URL,
      accounts:
        process.env.PRIVATE_KEY === undefined
          ? undefined
          : [process.env.PRIVATE_KEY],
    },
  },
};

export default config;
