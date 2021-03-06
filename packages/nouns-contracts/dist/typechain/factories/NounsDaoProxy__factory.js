"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NounsDaoProxy__factory = void 0;
const ethers_1 = require("ethers");
class NounsDaoProxy__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(timelock_, nouns_, vetoer_, admin_, implementation_, votingPeriod_, votingDelay_, proposalThresholdBPS_, quorumVotesBPS_, overrides) {
        return super.deploy(timelock_, nouns_, vetoer_, admin_, implementation_, votingPeriod_, votingDelay_, proposalThresholdBPS_, quorumVotesBPS_, overrides || {});
    }
    getDeployTransaction(timelock_, nouns_, vetoer_, admin_, implementation_, votingPeriod_, votingDelay_, proposalThresholdBPS_, quorumVotesBPS_, overrides) {
        return super.getDeployTransaction(timelock_, nouns_, vetoer_, admin_, implementation_, votingPeriod_, votingDelay_, proposalThresholdBPS_, quorumVotesBPS_, overrides || {});
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
exports.NounsDaoProxy__factory = NounsDaoProxy__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "timelock_",
                type: "address",
            },
            {
                internalType: "address",
                name: "nouns_",
                type: "address",
            },
            {
                internalType: "address",
                name: "vetoer_",
                type: "address",
            },
            {
                internalType: "address",
                name: "admin_",
                type: "address",
            },
            {
                internalType: "address",
                name: "implementation_",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "votingPeriod_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "votingDelay_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "proposalThresholdBPS_",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "quorumVotesBPS_",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "NewAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldImplementation",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "NewImplementation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldPendingAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newPendingAdmin",
                type: "address",
            },
        ],
        name: "NewPendingAdmin",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oldVetoer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newVetoer",
                type: "address",
            },
        ],
        name: "NewVetoer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ProposalCanceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "string[]",
                name: "signatures",
                type: "string[]",
            },
            {
                indexed: false,
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "ProposalCreated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "proposer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "string[]",
                name: "signatures",
                type: "string[]",
            },
            {
                indexed: false,
                internalType: "bytes[]",
                name: "calldatas",
                type: "bytes[]",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "startBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "endBlock",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalThreshold",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "quorumVotes",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "description",
                type: "string",
            },
        ],
        name: "ProposalCreatedWithRequirements",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ProposalExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "eta",
                type: "uint256",
            },
        ],
        name: "ProposalQueued",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldProposalThresholdBPS",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newProposalThresholdBPS",
                type: "uint256",
            },
        ],
        name: "ProposalThresholdBPSSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ProposalVetoed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldQuorumVotesBPS",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newQuorumVotesBPS",
                type: "uint256",
            },
        ],
        name: "QuorumVotesBPSSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "support",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "votes",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "reason",
                type: "string",
            },
        ],
        name: "VoteCast",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldVotingDelay",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newVotingDelay",
                type: "uint256",
            },
        ],
        name: "VotingDelaySet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "oldVotingPeriod",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newVotingPeriod",
                type: "uint256",
            },
        ],
        name: "VotingPeriodSet",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "implementation_",
                type: "address",
            },
        ],
        name: "_setImplementation",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "admin",
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
        inputs: [],
        name: "implementation",
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
        inputs: [],
        name: "pendingAdmin",
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
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506040516107e43803806107e483398101604081905261002f916102be565b600080546001600160a01b031916331790556040516001600160a01b038a811660248301528981166044830152881660648201526084810185905260a4810184905260c4810183905260e481018290526100bc9086906101040160408051601f198184030181529190526020810180516001600160e01b03908116630568cad960e31b179091526100f416565b6100c58561016a565b5050600080546001600160a01b0319166001600160a01b03959095169490941790935550610385945050505050565b600080836001600160a01b03168360405161010f919061034a565b600060405180830381855af49150503d806000811461014a576040519150601f19603f3d011682016040523d82523d6000602084013e61014f565b606091505b50915091506000821415610164573d60208201fd5b50505050565b6000546001600160a01b031633146101cd5760405162461bcd60e51b815260206004820152602d60248201526000805160206107c483398151915260448201526c6e3a2061646d696e206f6e6c7960981b60648201526084015b60405180910390fd5b6001600160a01b0381166102415760405162461bcd60e51b815260206004820152604160248201526000805160206107c483398151915260448201527f6e3a20696e76616c696420696d706c656d656e746174696f6e206164647265736064820152607360f81b608482015260a4016101c4565b600280546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a910160405180910390a15050565b80516001600160a01b03811681146102b957600080fd5b919050565b60008060008060008060008060006101208a8c0312156102dd57600080fd5b6102e68a6102a2565b98506102f460208b016102a2565b975061030260408b016102a2565b965061031060608b016102a2565b955061031e60808b016102a2565b945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b6000825160005b8181101561036b5760208186018101518583015201610351565b8181111561037a576000828501525b509190910192915050565b610430806103946000396000f3fe6080604052600436106100435760003560e01c8063267822471461005a5780635c60da1b146100b0578063bb913f41146100dd578063f851a440146100fd57610052565b366100525761005061012a565b005b61005061012a565b34801561006657600080fd5b506001546100879073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100bc57600080fd5b506002546100879073ffffffffffffffffffffffffffffffffffffffff1681565b3480156100e957600080fd5b506100506100f83660046103ad565b6101b2565b34801561010957600080fd5b506000546100879073ffffffffffffffffffffffffffffffffffffffff1681565b60025460405160009173ffffffffffffffffffffffffffffffffffffffff169061015790839036906103ea565b600060405180830381855af49150503d8060008114610192576040519150601f19603f3d011682016040523d82523d6000602084013e610197565b606091505b505090506040513d6000823e8180156101ae573d82f35b3d82fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461025e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4e6f756e7344414f50726f78793a3a5f736574496d706c656d656e746174696f60448201527f6e3a2061646d696e206f6e6c790000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610327576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604160248201527f4e6f756e7344414f50726f78793a3a5f736574496d706c656d656e746174696f60448201527f6e3a20696e76616c696420696d706c656d656e746174696f6e2061646472657360648201527f7300000000000000000000000000000000000000000000000000000000000000608482015260a401610255565b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a910160405180910390a15050565b6000602082840312156103bf57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146103e357600080fd5b9392505050565b818382376000910190815291905056fea264697066735822122048b5275de8a4b7be5676ddb31690b61bf92be880ecc9e94d1a78a3900c9c6eb664736f6c634300080600334e6f756e7344414f50726f78793a3a5f736574496d706c656d656e746174696f";
