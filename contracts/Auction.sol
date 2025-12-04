// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/*
 * AuctionHouse.sol
 *
 * Multi-auction English AuctionHouse for ERC-721 items.
 * - Sellers create auctions (must approve this contract to transfer the token).
 * - Buyers place bids (ETH/native currency).
 * - Previous highest bids are stored as refunds (pull pattern).
 * - Anti-sniping: bids placed within timeBuffer extend the auction end.
 * - Platform fee (bps) and ERC-2981 royalties are supported on settlement.
 *
 * NOTE: test

 