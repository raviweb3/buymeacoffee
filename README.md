Steps:
npm init

npm install --save-dev hardhat

npx hardhat

// test the script
npx hardhat run scripts/buy-coffee.js

// deploy Script - Deploys to Hardhat local chain
npx hardhat run scripts/deploy.js

// deploy to test net -- Goerli
// configure hardhat and specify .env values.
npx hardhat run scripts/deploy.js --network goerli

// Check the contract on EtherScan
https://goerli.etherscan.io/

// withdraw script(Connected to Goerli Network)
npx hardhat run scripts/withdraw.js


```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```