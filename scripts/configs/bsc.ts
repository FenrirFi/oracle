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
    // CEEK
    {
      underlying: "0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66",
      priceSource: "1",
    },
    // TINC
    {
      underlying: "0x05aD6E30A855BE07AfA57e08a4f30d00810a402e",
      priceSource: "1",
    },
    // PEX
    {
      underlying: "0x6a0b66710567b6beb81A71F7e9466450a91a384b",
      priceSource: "1",
    },
    // FROYO
    {
      underlying: "0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9",
      priceSource: "1",
    },
    // BSW
    {
      underlying: "0x965f527d9159dce6288a2219db51fc6eef120dd1",
      priceSource: "1",
    },
    // GMT
    {
      underlying: "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
      priceSource: "1",
      uniswapMarket: "0x007EC643C7Cc33a70C083fC305c283dd009C8b94",
    },
    // XWG
    {
      underlying: "0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc",
      priceSource: "1",
      uniswapMarket: "0x936928146a21AfCcd30DfA84824A780572B1630B",
    },
    // FENRIR-WBNB LP
    {
      underlying: "0xAe8fB9977EDec9Dc80A4FE42c8259566C7Fd4cf4",
      priceSource: "0",
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
    "0x61d9Fc7Af7153b2CbDB91032869a9ec1aD1Df4FD", // fCEEK
    "0x853d575ac4AaE20B69bce0E61Eb817c96DA90752", // fTINC
    "0x2395a1080bAA393639b2e65c1D6A56DF51d351Ea", // fPEX
    "0x82ad3f5485DB4b89Ded14F919bed1Ad6A2626895", // fFroyo
    "0x3b573c73AB570489C99a8fEEE801b7eF73296b20", // fBSW
    "0x04F8D3015eE15EDA822b9d1F489aA13379Ffc4b6", // fGMT
    "0x0BE08E9dB1deDC17Eab83ee1D5fcb39cda099233", // fXWG
    "0x1c8F36866691C7f25D14577cfE8c76BFb715Ee8A", // gFNR-WBNB-LP
  ],
};
