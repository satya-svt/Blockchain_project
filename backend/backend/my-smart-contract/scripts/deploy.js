// scripts/deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);
  
    const Contract = await ethers.getContractFactory("myContract");
    const contract = await Contract.deploy();
  
    console.log("Contract deployed to address:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });