/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet } from "fuels";
import { Interface, Contract } from "fuels";
import type {
  CounterContractAbi,
  CounterContractAbiInterface,
} from "../CounterContractAbi";
const _abi = [
  {
    type: "function",
    inputs: [],
    name: "increment",
    outputs: [
      {
        name: "",
        type: "u64",
        components: null,
      },
    ],
  },
  {
    type: "function",
    inputs: [],
    name: "decrement",
    outputs: [
      {
        name: "",
        type: "u64",
        components: null,
      },
    ],
  },
  {
    type: "function",
    inputs: [],
    name: "get_counter",
    outputs: [
      {
        name: "",
        type: "u64",
        components: null,
      },
    ],
  },
];

export class CounterContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): CounterContractAbiInterface {
    return new Interface(_abi) as CounterContractAbiInterface;
  }
  static connect(
    id: string,
    walletOrProvider: Wallet | Provider
  ): CounterContractAbi {
    return new Contract(id, _abi, walletOrProvider) as CounterContractAbi;
  }
}
