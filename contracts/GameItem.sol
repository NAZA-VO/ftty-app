// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/*
* ERC-721 Game Item Contract
* Features:
* - Role-based minting (GAME_ADMIN)
* - Updateable attributes (level, power, rarity)
* - Dynamic metadata (baseURI + attributes)
* - Pausable for emergency control
*/

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";