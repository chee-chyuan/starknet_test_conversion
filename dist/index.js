"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = require("starknet/dist/utils/number");
const uint256_1 = require("starknet/dist/utils/uint256");
// timestamp now: 1659829576
let input = (0, number_1.toBN)(1659829576);
const multiplier = (0, number_1.toBN)(1e10).mul((0, number_1.toBN)(1e10));
input = input.mul(multiplier);
input = (0, number_1.toBN)(1660000000);
input = input.mul(multiplier);
const res = (0, uint256_1.bnToUint256)(input);
console.log(res);
//# sourceMappingURL=index.js.map