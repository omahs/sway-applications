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

export type RawVecInput = { ptr: BigNumberish; cap: BigNumberish };

export type RawVecOutput = { ptr: bigint; cap: bigint };

export type VecInput = { buf: RawVecInput; len: BigNumberish };

export type VecOutput = { buf: RawVecOutput; len: bigint };

export type AddressInput = { value: string };

export type AddressOutput = { value: string };

export type FundManagementInput = {
  sender: AddressInput;
  fromInternalBalance: boolean;
  recipient: AddressInput;
  toInternalBalance: boolean;
};

export type FundManagementOutput = {
  sender: AddressOutput;
  fromInternalBalance: boolean;
  recipient: AddressOutput;
  toInternalBalance: boolean;
};

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

export type SingleSwapInput = {
  poolId: string;
  kind: SwapKindInput;
  assetIn: ContractIdInput;
  assetOut: ContractIdInput;
  amount: BigNumberish;
  userData: string;
};

export type SingleSwapOutput = {
  poolId: string;
  kind: SwapKindOutput;
  assetIn: ContractIdOutput;
  assetOut: ContractIdOutput;
  amount: bigint;
  userData: string;
};

export type JoinPoolRequestInput = {
  assets: VecInput;
  maxAmountsIn: VecInput;
  userData: string;
  fromInternalBalance: boolean;
};

export type JoinPoolRequestOutput = {
  assets: VecOutput;
  maxAmountsIn: VecOutput;
  userData: string;
  fromInternalBalance: boolean;
};

export type ExitPoolRequestInput = {
  assets: VecInput;
  minAmountsOut: VecInput;
  userData: string;
  toInternalBalance: boolean;
};

export type ExitPoolRequestOutput = {
  assets: VecOutput;
  minAmountsOut: VecOutput;
  userData: string;
  toInternalBalance: boolean;
};

export type SwapKindInput = Partial<{ GIVEN_IN: []; GIVEN_OUT: [] }>;

export type SwapKindOutput = Partial<{ GIVEN_IN: []; GIVEN_OUT: [] }>;

export type PoolSpecializationInput = Partial<{
  GENERAL: [];
  MINIMAL_SWAP_INFO: [];
  TWO_TOKEN: [];
}>;

export type PoolSpecializationOutput = Partial<{
  GENERAL: [];
  MINIMAL_SWAP_INFO: [];
  TWO_TOKEN: [];
}>;

interface VaultAbiInterface extends Interface {
  functions: {
    batch_swap: FunctionFragment;
    swap: FunctionFragment;
    query_batch_swap: FunctionFragment;
    register_tokens: FunctionFragment;
    deregister_tokens: FunctionFragment;
    join_pool: FunctionFragment;
    exit_pool: FunctionFragment;
    flash_loan: FunctionFragment;
    manage_pool_balance: FunctionFragment;
    manage_user_balance: FunctionFragment;
    register_pool: FunctionFragment;
    set_authorizer: FunctionFragment;
    set_relayer_approval: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "batch_swap",
    values: [
      SwapKindInput,
      VecInput,
      VecInput,
      FundManagementInput,
      VecInput,
      BigNumberish
    ]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "swap",
    values: [SingleSwapInput, FundManagementInput, BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "query_batch_swap",
    values: [SwapKindInput, VecInput, VecInput, FundManagementInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "register_tokens",
    values: [string, VecInput, VecInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "deregister_tokens",
    values: [string, VecInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "join_pool",
    values: [string, AddressInput, AddressInput, JoinPoolRequestInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "exit_pool",
    values: [string, AddressInput, AddressInput, ExitPoolRequestInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "flash_loan",
    values: [ContractIdInput, VecInput, VecInput, VecInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "manage_pool_balance",
    values: [VecInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "manage_user_balance",
    values: [VecInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "register_pool",
    values: [PoolSpecializationInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "set_authorizer",
    values: [ContractIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "set_relayer_approval",
    values: [AddressInput, AddressInput, boolean]
  ): Uint8Array;

  decodeFunctionData(
    functionFragment: "batch_swap",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(functionFragment: "swap", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "query_batch_swap",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "register_tokens",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "deregister_tokens",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "join_pool",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "exit_pool",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "flash_loan",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "manage_pool_balance",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "manage_user_balance",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "register_pool",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "set_authorizer",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "set_relayer_approval",
    data: BytesLike
  ): DecodedValue;
}

export class VaultAbi extends Contract {
  interface: VaultAbiInterface;
  prepareCall: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      options?: ContractCallOptions
    ): ContractCall;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      options?: ContractCallOptions
    ): ContractCall;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      options?: ContractCallOptions
    ): ContractCall;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      options?: ContractCallOptions
    ): ContractCall;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      options?: ContractCallOptions
    ): ContractCall;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      options?: ContractCallOptions
    ): ContractCall;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      options?: ContractCallOptions
    ): ContractCall;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      options?: ContractCallOptions
    ): ContractCall;

    manage_pool_balance(
      ops: VecInput,
      options?: ContractCallOptions
    ): ContractCall;

    manage_user_balance(
      ops: VecInput,
      options?: ContractCallOptions
    ): ContractCall;

    register_pool(
      specialization: PoolSpecializationInput,
      options?: ContractCallOptions
    ): ContractCall;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      options?: ContractCallOptions
    ): ContractCall;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      options?: ContractCallOptions
    ): ContractCall;
  };
  submit: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<VecOutput>;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<VecOutput>;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    manage_pool_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    manage_user_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    register_pool(
      specialization: PoolSpecializationInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<string>;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  submitResult: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    manage_pool_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    manage_user_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    register_pool(
      specialization: PoolSpecializationInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<TransactionResult<any>>;
  };
  dryRun: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<VecOutput>;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<VecOutput>;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    manage_pool_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    manage_user_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    register_pool(
      specialization: PoolSpecializationInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<string>;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  dryRunResult: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    manage_pool_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    manage_user_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    register_pool(
      specialization: PoolSpecializationInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };
  simulate: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<VecOutput>;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<VecOutput>;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    manage_pool_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    manage_user_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    register_pool(
      specialization: PoolSpecializationInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<string>;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;
  };
  simulateResult: {
    batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      limits: VecInput,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    swap(
      singleSwap: SingleSwapInput,
      funds: FundManagementInput,
      limit: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    query_batch_swap(
      kind: SwapKindInput,
      swaps: VecInput,
      assets: VecInput,
      funds: FundManagementInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    register_tokens(
      poolId: string,
      tokens: VecInput,
      assetManagers: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    deregister_tokens(
      poolId: string,
      tokens: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    join_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: JoinPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    exit_pool(
      poolId: string,
      sender: AddressInput,
      recipient: AddressInput,
      request: ExitPoolRequestInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    flash_loan(
      recipient: ContractIdInput,
      tokens: VecInput,
      amounts: VecInput,
      userData: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    manage_pool_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    manage_user_balance(
      ops: VecInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    register_pool(
      specialization: PoolSpecializationInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    set_authorizer(
      newAuthorizer: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;

    set_relayer_approval(
      sender: AddressInput,
      relayer: AddressInput,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<CallResult>;
  };

  batch_swap(
    kind: SwapKindInput,
    swaps: VecInput,
    assets: VecInput,
    funds: FundManagementInput,
    limits: VecInput,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VecOutput>;

  swap(
    singleSwap: SingleSwapInput,
    funds: FundManagementInput,
    limit: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;

  query_batch_swap(
    kind: SwapKindInput,
    swaps: VecInput,
    assets: VecInput,
    funds: FundManagementInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VecOutput>;

  register_tokens(
    poolId: string,
    tokens: VecInput,
    assetManagers: VecInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  deregister_tokens(
    poolId: string,
    tokens: VecInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  join_pool(
    poolId: string,
    sender: AddressInput,
    recipient: AddressInput,
    request: JoinPoolRequestInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  exit_pool(
    poolId: string,
    sender: AddressInput,
    recipient: AddressInput,
    request: ExitPoolRequestInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  flash_loan(
    recipient: ContractIdInput,
    tokens: VecInput,
    amounts: VecInput,
    userData: VecInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  manage_pool_balance(
    ops: VecInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  manage_user_balance(
    ops: VecInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  register_pool(
    specialization: PoolSpecializationInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<string>;

  set_authorizer(
    newAuthorizer: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  set_relayer_approval(
    sender: AddressInput,
    relayer: AddressInput,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;
}
