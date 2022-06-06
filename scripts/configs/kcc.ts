export const configs = {
  baseAsset: "0x4446fc4eb47f2f6586f9faab68b3498f86c07521",
  UniswapV2Router: "0x8c8067ed3bc19acce28c1953bfc18dc85a2127f7",
  basePriceDecimals: "18",
  defaultTwapPeriod: "14400",
  tokenConfigs: [
    // base config - WKCS/USDT
    {
      underlying: "0x4446fc4eb47f2f6586f9faab68b3498f86c07521",
      priceSource: "1",
      uniswapMarket: "0xb3b92d6b2656f9ceb4a381718361a21bf9b82bd9",
    },
    // USDC
    {
      underlying: "0x980a5AfEf3D17aD98635F6C5aebCBAedEd3c3430",
      priceSource: "0",
    },
    // USDT
    {
      underlying: "0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48",
      priceSource: "1",
      uniswapMarket: "0xeb06057e2405c8819e2cffea5dea07a54ad569e3",
    },
    // MJT
    {
      underlying: "0x2cA48b4eeA5A731c2B54e7C3944DBDB87c0CFB6F",
      priceSource: "1",
    },
    // ETH
    {
      underlying: "0xf55aF137A98607F7ED2eFEfA4cd2DfE70E4253b1",
      priceSource: "1",
      uniswapMarket: "0x1f1ec5bcb2cb2a892d34a85d3ecb4c7e167ff630",
    },
    // BTCK
    {
      underlying: "0xfA93C12Cd345c658bc4644D1D4E1B9615952258C",
      priceSource: "1",
      uniswapMarket: "0x67990bfeeb3c3537fc67c23f294312155d764b20",
    },
    // SAX
    {
      underlying: "0x8367B781316eDb622DB3847f863e610edf1f4a20",
      priceSource: "1",
      //   uniswapMarket: "0x09021898cb24c77ce1eb040080eb10dcd738d72b",
    },
    // //COOGA
    {
      underlying: "0x23e1aCD3D979025cf38C5A1B4A9df20ecAF32d5D",
      priceSource: "1",
      uniswapMarket: "0x0f51359b91e0bbE2f90D0B40327F4842A6c8F38f",
    },
    //Boring
    {
      underlying: "0x5D78bF8f79A66e43f5932c1Ae0b8fA6563F97f74",
      priceSource: "1",
      uniswapMarket: "0x0b00a81cab044ed5957303508276d8ae5c61ecc4",
    },
    //pencil
    {
      underlying: "0x44a6D299EEd7ac941f090257380eE1d1934FAdbE",
      priceSource: "1",
      uniswapMarket: "0x98858d651b5147b805a768f8a93d13721e642f2e",
    },
    //SAND
    {
      underlying: "0xb12c13e66AdE1F72f71834f2FC5082Db8C091358",
      priceSource: "1",
      uniswapMarket: "0x5a32b4dffa00e3cee3fa77ef467f35b4653ae615",
    },
    //COOHA
    {
      underlying: "0xd0F2e8CF77C1d3DCC4d2d03f99D959bb5cE496BF",
      priceSource: "1",
      uniswapMarket: "0x6CB7A7E6f02dd23dFb4c226210A3184e288e0F3e",
    },
    //MANA
    {
      underlying: "0xC19a5caCC2bb68Ff09f2Fcc695F31493A039Fa5e",
      priceSource: "1",
      uniswapMarket: "0xbF5007e065fC3FEA97af1958F88bb3c291382400",
    }
  ],

  cTokens: [
    "0xD8629C8f41E56429Ea425DFf10e673a06B7Fdc98", //fUSDT
    "0x55832644c669b598C5A072a94194B4A664240220", //fUSDC
    "0xFf7D74F3D61856FaDB0b2867e40878f761e5851F", //fWKCS
    "0x7bc823573fb55Da9E17D67eDFB85A91b3eb2E4c5", //fETH
    "0xD4898c7b5441a4B67568023D35bda1dFD56F7223", //fMJT
    "0xEd50260BB18613FfAA40D9B8bE1Ab6D53e550dE0", //fBTCK
    "0xedAC969F40A6dd00810846Cf75b2e8B3Bc6d1697", //fCOOGA
    "0xFb5538B31674edF756604CBA01ec1a0e75710110",//fSAND
    "0x3AC8bad7F2a8b4DD9A6a4dDf26d99a3D2487fb53",//fCOHA
    "0x89c5d3FCD22c1448D8Ca550A82d56eda5762ae6d",//fMANA
    "0xc5ceD2C235E586d9e78EE3150E07555673f67D70", //fSAX
  ],
};
