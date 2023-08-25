const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   /* //Deploy ZIL
    const weth = await ethers.getContractFactory('WZIL');
    const wethInstance = await weth.deploy();
    await wethInstance.deployed();
 
    console.log(`WZIL deployed to : ${wethInstance.address}`); */

   /*  //Deploy Factory
     const factory = await ethers.getContractFactory('SmileySwapFactory');
     const factoryInstance = await factory.deploy(deployerAddress);
     await factoryInstance.deployed();
  
     console.log(`SmileySwapFactory Factory deployed to : ${factoryInstance.address}`); */

   //Deploy Router passing Factory Address and WZIL Address
   const router = await ethers.getContractFactory('SmileySwapRouter');
   const routerInstance = await router.deploy(
      '0x0060Fb33D6CD2ae2dfeFa433133c3f662AD3E0Fc',
      '0x603AB0224e1ecFBb14cF9731e6F175d597F08a7c'
   );
   await routerInstance.deployed();

   console.log(`SmileSwapRouter  deployed to :  ${routerInstance.address}`);

   /*  //Deploy Multicall (needed for Interface)
     const multicall = await ethers.getContractFactory('Multicall');
     const multicallInstance = await multicall.deploy();
     await multicallInstance.deployed();
  
     console.log(`Multicall deployed to : ${multicallInstance.address}`); */
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
