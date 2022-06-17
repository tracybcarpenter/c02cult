"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Erc721__factory = void 0;
const ethers_1 = require("ethers");
class Erc721__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(name_, symbol_, overrides) {
        return super.deploy(name_, symbol_, overrides || {});
    }
    getDeployTransaction(name_, symbol_, overrides) {
        return super.getDeployTransaction(name_, symbol_, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Erc721__factory = Erc721__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001a3b38038062001a3b8339810160408190526200003491620001c5565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b82805462000076906200022f565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200012057600080fd5b81516001600160401b03808211156200013d576200013d6200026c565b604051601f8301601f19908116603f011681019082821181831017156200016857620001686200026c565b816040528381526020925086838588010111156200018557600080fd5b600091505b83821015620001a957858201830151818301840152908201906200018a565b83821115620001bb5760008385830101525b9695505050505050565b60008060408385031215620001d957600080fd5b82516001600160401b0380821115620001f157600080fd5b620001ff868387016200010e565b935060208501519150808211156200021657600080fd5b5062000225858286016200010e565b9150509250929050565b600181811c908216806200024457607f821691505b602082108114156200026657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6117a980620002926000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d0578063b88d4fde146101e3578063c87b56dd146101f6578063e985e9c51461020957600080fd5b80636352211e1461019457806370a08231146101a757806395d89b41146101c857600080fd5b8063095ea7b3116100bd578063095ea7b31461015957806323b872dd1461016e57806342842e0e1461018157600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f236600461144e565b610252565b60405190151581526020015b60405180910390f35b610114610337565b6040516101039190611563565b61013461012f366004611488565b6103c9565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610103565b61016c610167366004611424565b61048e565b005b61016c61017c3660046112b2565b6105e7565b61016c61018f3660046112b2565b61066e565b6101346101a2366004611488565b610689565b6101ba6101b5366004611264565b610721565b604051908152602001610103565b6101146107d5565b61016c6101de3660046113e8565b6107e4565b61016c6101f13660046112ee565b6108e1565b610114610204366004611488565b61096f565b6100f761021736600461127f565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102e557507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061033157507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b606060008054610346906115e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610372906115e5565b80156103bf5780601f10610394576101008083540402835291602001916103bf565b820191906000526020600020905b8154815290600101906020018083116103a257829003601f168201915b5050505050905090565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff166104655760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061049982610689565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561053d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161045c565b3373ffffffffffffffffffffffffffffffffffffffff8216148061056657506105668133610217565b6105d85760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161045c565b6105e28383610a72565b505050565b6105f13382610b12565b6106635760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161045c565b6105e2838383610c68565b6105e2838383604051806020016040528060008152506108e1565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16806103315760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161045c565b600073ffffffffffffffffffffffffffffffffffffffff82166107ac5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161045c565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b606060018054610346906115e5565b73ffffffffffffffffffffffffffffffffffffffff821633141561084a5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161045c565b33600081815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6108eb3383610b12565b61095d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161045c565b61096984848484610e9b565b50505050565b60008181526002602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16610a095760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161045c565b6000610a2060408051602081019091526000815290565b90506000815111610a405760405180602001604052806000815250610a6b565b80610a4a84610f24565b604051602001610a5b9291906114eb565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091558190610acc82610689565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16610ba95760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161045c565b6000610bb483610689565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610c2357508373ffffffffffffffffffffffffffffffffffffffff16610c0b846103c9565b73ffffffffffffffffffffffffffffffffffffffff16145b80610c60575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b8273ffffffffffffffffffffffffffffffffffffffff16610c8882610689565b73ffffffffffffffffffffffffffffffffffffffff1614610d115760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161045c565b73ffffffffffffffffffffffffffffffffffffffff8216610d995760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161045c565b610da4600082610a72565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120805460019290610dda9084906115a2565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260408120805460019290610e15908490611576565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610ea6848484610c68565b610eb284848484611056565b6109695760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161045c565b606081610f6457505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610f8e5780610f7881611639565b9150610f879050600a8361158e565b9150610f68565b60008167ffffffffffffffff811115610fa957610fa9611713565b6040519080825280601f01601f191660200182016040528015610fd3576020820181803683370190505b5090505b8415610c6057610fe86001836115a2565b9150610ff5600a86611672565b611000906030611576565b60f81b818381518110611015576110156116e4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061104f600a8661158e565b9450610fd7565b600073ffffffffffffffffffffffffffffffffffffffff84163b15611230576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a02906110cd90339089908890889060040161151a565b602060405180830381600087803b1580156110e757600080fd5b505af1925050508015611135575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111329181019061146b565b60015b6111e5573d808015611163576040519150601f19603f3d011682016040523d82523d6000602084013e611168565b606091505b5080516111dd5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161045c565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610c60565b506001949350505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461125f57600080fd5b919050565b60006020828403121561127657600080fd5b610a6b8261123b565b6000806040838503121561129257600080fd5b61129b8361123b565b91506112a96020840161123b565b90509250929050565b6000806000606084860312156112c757600080fd5b6112d08461123b565b92506112de6020850161123b565b9150604084013590509250925092565b6000806000806080858703121561130457600080fd5b61130d8561123b565b935061131b6020860161123b565b925060408501359150606085013567ffffffffffffffff8082111561133f57600080fd5b818701915087601f83011261135357600080fd5b81358181111561136557611365611713565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156113ab576113ab611713565b816040528281528a60208487010111156113c457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156113fb57600080fd5b6114048361123b565b91506020830135801515811461141957600080fd5b809150509250929050565b6000806040838503121561143757600080fd5b6114408361123b565b946020939093013593505050565b60006020828403121561146057600080fd5b8135610a6b81611742565b60006020828403121561147d57600080fd5b8151610a6b81611742565b60006020828403121561149a57600080fd5b5035919050565b600081518084526114b98160208601602086016115b9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600083516114fd8184602088016115b9565b8351908301906115118183602088016115b9565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff80871683528086166020840152508360408301526080606083015261155960808301846114a1565b9695505050505050565b602081526000610a6b60208301846114a1565b6000821982111561158957611589611686565b500190565b60008261159d5761159d6116b5565b500490565b6000828210156115b4576115b4611686565b500390565b60005b838110156115d45781810151838201526020016115bc565b838111156109695750506000910152565b600181811c908216806115f957607f821691505b60208210811415611633577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561166b5761166b611686565b5060010190565b600082611681576116816116b5565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffff000000000000000000000000000000000000000000000000000000008116811461177057600080fd5b5056fea2646970667358221220dcd56b214b000b0662c8a17bfeaffc6326e616325a7e43cb25174d1d2015c0b164736f6c63430008060033";