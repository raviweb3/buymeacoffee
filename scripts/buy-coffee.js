const hre = require("hardhat");

async function getBalance(address){
    const balanceBigInt = await hre.ethers.provider.getBalance(address);
    return hre.ethers.utils.formatEther(balanceBigInt);
}

async function printBalances(addresses){
    let index = 0;
    for(const address of addresses){
        console.log(`address ${index} balance:`, await getBalance(address));
        index ++;
    }
}

async function printMemos(memos){
    for(const memo of memos){
        const timestamp = memo.timestamp;
        const tipper = memo.name;
        const tipperAddress = memo.from;
        const message = memo.message;
        console.log(`At ${timestamp}, ${tipper} (${tipperAddress}) said: "${message}"`);
    }
}

async function main(){
    // Accounts to try with
    const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

    // We get the contract to deploy.
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();

  // Deploy the contract.
  await buyMeACoffee.deployed();
  console.log("BuyMeACoffee deployed to:", buyMeACoffee.address);

   // Check balances before the coffee purchase.
   const addresses = [owner.address, tipper.address, buyMeACoffee.address];
   console.log("== start ==");
   await printBalances(addresses);

   // Buy the owner a few coffees.
  const tip = {value: hre.ethers.utils.parseEther("1")};
  await buyMeACoffee.connect(tipper).buyCoffee("Akshay", "I know you love coffee!", tip);
  await buyMeACoffee.connect(tipper2).buyCoffee("Rohini", "Ok, just this last one", tip);
  await buyMeACoffee.connect(tipper3).buyCoffee("A", "Have it!", tip);

   // Check balances after the coffee purchase.
   console.log("== bought coffee ==");
   await printBalances(addresses);

   // Withdraw.
  await buyMeACoffee.connect(owner).withdrawTips();

  // Check balances after withdrawal.
  console.log("== withdrawTips ==");
  await printBalances(addresses);

  // Check out the memos.
  console.log("== memos ==");
  const memos = await buyMeACoffee.getMemos();
  printMemos(memos);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });