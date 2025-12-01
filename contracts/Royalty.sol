// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/*
 * ERC-2981 Royalty Implementation
 * - Uses OpenZeppelin ERC2981 base implementation
 * - AccessControl for admin role
 * - Manage default royalty and token-specific royalties
 *
 * Note:
 * - feeNumerator is in basis points relative to _feeDenominator() (default 10000).
 *   e.g., feeNumerator = 500 => 5.00%
 */

 