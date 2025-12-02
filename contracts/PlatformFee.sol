// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title PlatformFee
 * @notice Handles marketplace platform fees. 
 *         Can be inherited by marketplace contracts.
 */

 contract PlatformFee {
    address public platformFeeRecipient;   // Address that receives platform fees
    uint96 public platformFeeBps;          // Fee in basis points (e.g., 250 = 2.5%)

    event PlatformFeeUpdated(uint96 newFeeBps);
    event PlatformFeeRecipientUpdated(address newRecipient);

    modifier validBps(uint96 bps) {
        require(bps <= 10000, "Fee too high");
        _;
    }

    constructor(address _recipient, uint96 _feeBps) validBps(_feeBps) {
        require(_recipient != address(0), "Invalid recipient");
        platformFeeRecipient = _recipient;
        platformFeeBps = _feeBps;
    }

    /**
     * @notice Updates the platform fee percentage.
     * @dev Should be restricted by onlyOwner in child contract.
     */

      function _setPlatformFee(uint96 _newFeeBps)
        internal
        validBps(_newFeeBps)
    {
        platformFeeBps = _newFeeBps;
        emit PlatformFeeUpdated(_newFeeBps);
    }