export const configs = {
  baseAsset: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  UniswapV2Router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  basePriceDecimals: "18",
  defaultTwapPeriod: "3600",
  tokenConfigs: [
    // base config - WBNB/BUSD
    {
      underlying: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      priceSource: "1",
      uniswapMarket: "0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",
    },
    // BUSD
    {
      underlying: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      priceSource: "0",
    },
    // ETH
    {
      underlying: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      priceSource: "1",
    },
    // Cake
    {
      underlying: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      priceSource: "1",
    },
  ],
};
