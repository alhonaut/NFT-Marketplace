// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library ConverterEthToUsd {
    function getEthPrice(
        address aggregatorAddress
    ) internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            aggregatorAddress
        );
        (, int answer, , , ) = priceFeed.latestRoundData();

        return uint256(answer / (10 ** 8)); // we got answer in 8 digits
    }

    function convertPrice(
        uint256 price,
        address aggregatorAddress
    ) internal view returns (uint256) {
        uint256 priceInUsd = getEthPrice(aggregatorAddress);
        uint256 finalPrice = priceInUsd * price;

        return finalPrice;
    }
}
