/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  ContractCall,
  ContractCallOptions,
  Overrides,
  BigNumberish,
  BytesLike,
  CallResult,
  ScriptTransactionRequest,
  TransactionResult,
} from "fuels";

interface ScriptVaultAbiInterface extends Interface {
  functions: {
    main: FunctionFragment;
  };

  encodeFunctionData(functionFragment: "main", values?: undefined): Uint8Array;

  decodeFunctionData(functionFragment: "main", data: BytesLike): DecodedValue;
}

export class ScriptVaultAbi extends Contract {
  interface: ScriptVaultAbiInterface;
  prepareCall: {
    main(options?: ContractCallOptions): ContractCall;
  };
  submit: {
    main(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  submitResult: {
    main(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    main(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  dryRunResult: {
    main(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  simulate: {
    main(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  simulateResult: {
    main(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  main(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;
}
