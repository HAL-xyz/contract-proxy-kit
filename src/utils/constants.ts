type Json =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | Json[];
type JsonObject = { [property: string]: Json }

export type Address = string;
export type Abi = JsonObject[];
export type NumberLike = number | string | bigint | object;

export enum OperationType {
  Call, // 0
  DelegateCall // 1
}

export const zeroAddress = `0x${'0'.repeat(40)}`;

export const defaultTxOperation = OperationType.Call;
export const defaultTxValue = 0;
export const defaultTxData = '0x';

// keccak256(toUtf8Bytes('Contract Proxy Kit'))
export const predeterminedSaltNonce = '0xcfe33a586323e7325be6aa6ecd8b4600d232a9037e83c8ece69413b777dabe65';
