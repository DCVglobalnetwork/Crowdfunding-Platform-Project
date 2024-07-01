// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/CrowdfundingContract.sol";

contract DeployCrowdfundingContract is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        new CrowdfundingContract(1000, 60 * 60 * 24 * 30); // 1000 wei goal, 30 days duration

        vm.stopBroadcast();
    }
}
