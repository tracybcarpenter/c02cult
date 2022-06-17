/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { NounsSeeder } from "../NounsSeeder";

export class NounsSeeder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NounsSeeder> {
    return super.deploy(overrides || {}) as Promise<NounsSeeder>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NounsSeeder {
    return super.attach(address) as NounsSeeder;
  }
  connect(signer: Signer): NounsSeeder__factory {
    return super.connect(signer) as NounsSeeder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NounsSeeder {
    return new Contract(address, _abi, signerOrProvider) as NounsSeeder;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        internalType: "contract INounsDescriptor",
        name: "descriptor",
        type: "address",
      },
    ],
    name: "generateSeed",
    outputs: [
      {
        components: [
          {
            internalType: "uint48",
            name: "background",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "body",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "accessory",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "head",
            type: "uint48",
          },
          {
            internalType: "uint48",
            name: "glasses",
            type: "uint48",
          },
        ],
        internalType: "struct INounsSeeder.Seed",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610563806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063422e2e9914610030575b600080fd5b61004361003e36600461046b565b61009a565b6040516100919190815165ffffffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608092830151169181019190915260a00190565b60405180910390f35b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052906100d06001436104b4565b604080519140602083015281018590526060016040516020818303038152906040528051906020012060001c905060008373ffffffffffffffffffffffffffffffffffffffff16634531c0a86040518163ffffffff1660e01b815260040160206040518083038186803b15801561014657600080fd5b505afa15801561015a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017e9190610452565b905060008473ffffffffffffffffffffffffffffffffffffffff1663eba818066040518163ffffffff1660e01b815260040160206040518083038186803b1580156101c857600080fd5b505afa1580156101dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102009190610452565b905060008573ffffffffffffffffffffffffffffffffffffffff16634daebac26040518163ffffffff1660e01b815260040160206040518083038186803b15801561024a57600080fd5b505afa15801561025e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102829190610452565b905060008673ffffffffffffffffffffffffffffffffffffffff1663cc2aa0916040518163ffffffff1660e01b815260040160206040518083038186803b1580156102cc57600080fd5b505afa1580156102e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103049190610452565b905060008773ffffffffffffffffffffffffffffffffffffffff16634479cef26040518163ffffffff1660e01b815260040160206040518083038186803b15801561034e57600080fd5b505afa158015610362573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103869190610452565b90506040518060a00160405280868865ffffffffffff166103a791906104f2565b65ffffffffffff16815260200185603089901c65ffffffffffff166103cc91906104f2565b65ffffffffffff16815260200184606089901c65ffffffffffff166103f191906104f2565b65ffffffffffff16815260200183609089901c65ffffffffffff1661041691906104f2565b65ffffffffffff1681526020018260c089901c65ffffffffffff1661043b91906104f2565b65ffffffffffff1690529998505050505050505050565b60006020828403121561046457600080fd5b5051919050565b6000806040838503121561047e57600080fd5b82359150602083013573ffffffffffffffffffffffffffffffffffffffff811681146104a957600080fd5b809150509250929050565b6000828210156104ed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b600082610528577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50069056fea264697066735822122012c88fd9d2f4b019fbe1cc68d0afc2ee7079c1dd3d4c74066a8978426db3d04364736f6c63430008060033";
