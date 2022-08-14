import { stark } from "starknet";
import { toBN } from "starknet/dist/utils/number";
import { bnToUint256 } from "starknet/dist/utils/uint256";

// timestamp now: 1659829576

let input = toBN(1659829576)
const multiplier = toBN(1e10).mul(toBN(1e10))
input = input.mul(multiplier)

input = toBN(1660000000)
input = input.mul(multiplier)

const res= bnToUint256(input)
console.log(res)