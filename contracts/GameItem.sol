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

contract GameItemNFT is ERC721URIStorage, AccessControl, Pausable {
    using Counters for Counters.Counter;
    using Strings for uint256;

    bytes32 public constant GAME_ADMIN = keccak256("GAME_ADMIN");

    Counters.Counter private _tokenIdTracker;

    // Base metadata URI
    string private baseTokenURI;

    // Struct for in-game attributes
    struct GameStats {
        uint256 level;
        uint256 power;
        uint256 rarity;
    }

    // Storage for each token's stats
    mapping(uint256 => GameStats) public itemStats;