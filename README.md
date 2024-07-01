# Crowdfunding Platform

A decentralized crowdfunding platform built on Ethereum, allowing users to create and contribute to fundraising campaigns. The platform ensures transparency and security using smart contracts.

## Table of Contents
  * Features
  * Technologies Used
  * Getting Started
  * Setup and Installation
  * Smart Contract
  * Interacting with the Platform
  * Contributing
  * License

## Features
* Create and manage crowdfunding campaigns.
* Contribute to campaigns using ETH.
* Withdraw funds if the campaign goal is reached.
* Refund contributions if the campaign goal is not met.

## Technologies Used
* Solidity
* JavaScript
* Node.js
* HTML/CSS
* Foundry
* MetaMask

# Getting Started
To get a local copy up and running, follow these steps.

### Prerequisites
* Node.js
* Metamask browser extension
* An Ethereum node provider (e.g. Alchemy)

# Setup and Installation
1. Clone the repository

    ```shell
    git clone https://github.com/DCVglobalnetwork/Crowdfunding-Platform-Project.git
    cd Crowdfunding-Platform-Project
    ```
2. Install dependencies

    ```shell
    npm install
    ```

3. Install Foundry
 Follow the instructions on the Foundry GitHub
https://github.com/foundry-rs
 to install Foundry.

4. Set up environment variables

Create a `.env` file in the root directory and add your Alchemy project ID and your private key:  
```shell
ALCHEMY_PROJECT_ID=your_alchemy_project_id
PRIVATE_KEY=your_private_key
```

5. Compile the smart contract
```sh
forge build
```

6.    Deploy the smart contract

Deploy the smart contract to your desired network (e.g., Sepolia, Mainnet, etc.):
```sh
forge script script/DeployCrowdfundingContract.s.sol --rpc-url https://eth-sepolia.g.alchemy.com/v2/$ALCHEMY_PROJECT_ID --broadcast --private-key $PRIVATE_KEY
```
Note the deployed contract address.

7. Update the contract address and ABI in app.js

Replace 0xYourContractAddress and /* ABI goes here */ with your deployed contract address and ABI.

# Smart Contract
The smart contract is located in the `src` directory. It defines the crowdfunding logic and includes functions for contributing, withdrawing funds, and getting refunds.
Interact with the Contract
Contribute: Enter an amount in the input field and click "Contribute".
Withdraw Funds: Click "Withdraw Funds" (only available to the owner).
Get a Refund: Click "Get Refund" if the funding goal was not reached.
This is a simple guide to get you started with deploying and interacting with your crowdfunding contract using Foundry and building a basic frontend interface. You can also do the same on REMIX. 

## Run the Frontend
Open index.html in a web browser. Ensure you have MetaMask installed and connected to the correct network.

![image](https://github.com/DCVglobalnetwork/Crowdfunding-Platform-Project/assets/105791829/849a92cd-395d-46c2-8833-f813fb79ced4)


## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Security Note
Important: Use Metamask for Development Only
While developing and testing your Crowdfunding platform, we recommend using Metamask for managing and interacting with your smart contracts. Metamask provides an easy-to-use interface and integrates seamlessly with Web3.js for development purposes. However, for production deployment and interactions, it's crucial to follow best practices for security. Here are some important considerations:

Private Key Management:

Never expose your private keys in client-side code.
Use environment variables to store sensitive information securely.
For production, consider using secure key management services like AWS KMS, Azure Key Vault, or GCP KMS.


Regularly audit your smart contracts for security vulnerabilities. Use tools like MythX, Slither, and other static analysis tools.
Implement logging and monitoring for all contract interactions to detect and respond to suspicious activities promptly.

Security best practices, such as verifying the URLs they are interacting with, recognizing phishing attempts, and safely managing their private keys.
By following these guidelines, you can ensure that your Crowdfunding platform is secure and resilient against potential attacks and vulnerabilities. Always prioritize security, especially when dealing with real funds and user assets.
