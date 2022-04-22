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
    // USDC
    {
      underlying: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      priceSource: "0",
    },
    // USDT
    {
      underlying: "0x55d398326f99059fF775485246999027B3197955",
      priceSource: "1",
    },
    // BTCB
    {
      underlying: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      priceSource: "1",
    },
    // DAI
    {
      underlying: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      priceSource: "1",
    },
    // TUSD
    {
      underlying: "0x14016E85a25aeb13065688cAFB43044C2ef86784",
      priceSource: "1",
    },
  ],

  cTokens: [
    "0xD8629C8f41E56429Ea425DFf10e673a06B7Fdc98", // fBUSD
    "0xd74daaf227a6B88aFf392857C23eCE2aD8F80e16", // fUSDC
    "0x444ADC2D487090A660ebFdDd934d0E962410d8Cc", // fWBNB
    "0x859917Aa732e79d9fDE481A091DF866C9d54445A", // fUSDT
    "0xbB71B107BCDE54aA88F404D24a1bE1986B4e99D5", // fETH
    "0x914f9E5644d78fd287fF36081544FcCFbdF31CAE", // fBTCB
    "0x9f34BD9F72B91a904e8B4FAdA5ce6ecc572113A1", // fDAI
    "0xaf528C764284b5EbD501C2BebF611858D896427d", // fCake
    "0x6908CC99407bE9FB693841DEf1a6A77CDDc01684", // fTUSD
  ],
};
