document.getElementById('contributeButton').addEventListener('click', () => {
    const amount = document.getElementById('contributionAmount').value;
    // Add logic to handle contribution
    console.log(`Contributed: ${amount} ETH`);
});

document.getElementById('withdrawButton').addEventListener('click', () => {
    // Add logic to handle withdrawal
    console.log('Withdrawal requested');
});

document.getElementById('refundButton').addEventListener('click', () => {
    // Add logic to handle refund
    console.log('Refund requested');
});




const contractABI = [
    {
        "inputs": [
            {
                "name": "_goal",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_duration",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "contribute",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "contributions",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "deadline",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "fundsRaised",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRefund",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "goal",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "withdrawFunds",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    }
];

const contractAddress = '0x9f269a8b57457cd1d7fbaef3880a13314b6c0f43';

let provider;
let signer;
let crowdfundingContract;

async function init() {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    crowdfundingContract = new ethers.Contract(contractAddress, contractABI, signer);
}

async function contribute() {
    const amount = document.getElementById('contributionAmount').value;
    await crowdfundingContract.contribute({ value: ethers.utils.parseEther(amount) });
}

async function withdrawFunds() {
    await crowdfundingContract.withdrawFunds();
}

async function getRefund() {
    await crowdfundingContract.getRefund();
}

window.onload = init;
