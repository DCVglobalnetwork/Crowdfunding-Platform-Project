// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/CrowdfundingContract.sol";

contract CrowdfundingContractTest is Test {
    CrowdfundingContract public crowdfunding;
    address public owner;
    address public contributor1;
    address public contributor2;
    uint256 public goal;
    uint256 public duration;

    function setUp() public {
        owner = address(this);
        contributor1 = address(0x1);
        contributor2 = address(0x2);
        goal = 1000;
        duration = 60 * 60 * 24 * 30; // 30 days
        crowdfunding = new CrowdfundingContract(goal, duration);
    }

    function testInitialSettings() public view {
        assertEq(crowdfunding.owner(), owner);
        assertEq(crowdfunding.goal(), goal);
        assertEq(crowdfunding.deadline(), block.timestamp + duration);
        assertEq(crowdfunding.fundsRaised(), 0);
    }
}
