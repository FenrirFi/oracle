import hre from "hardhat";
import { readFileSync, writeFileSync } from "fs";

const outputFilePath = `./deployments/${hre.network.name}.json`;

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log(`>>>>>>>>>>>> Deployer: ${deployer.address} <<<<<<<<<<<<\n`);

  const deployments = JSON.parse(readFileSync(outputFilePath, "utf-8"));
  const ContractName = "ProxyOracle";

  const ProxyOracle = await hre.ethers.getContractFactory(ContractName);
  const proxyOracle = await ProxyOracle.deploy();
  console.log(`${ContractName} deployed to: ${proxyOracle.address}`);

  if (!deployments[ContractName]) deployments[ContractName] = [];
  deployments[ContractName].push(proxyOracle.address);
  writeFileSync(outputFilePath, JSON.stringify(deployments, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });