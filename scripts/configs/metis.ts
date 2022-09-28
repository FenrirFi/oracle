export const configs = {
  baseAsset: "Metis",
  UniswapV2Router: "0x1E876cCe41B7b844FDe09E38Fa1cf00f213bFf56",
  basePriceDecimals: "6",
  defaultTwapPeriod: "10800",
  tokenConfigs: [
    // base config - Metis/USDC
    {
      underlying: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
      priceSource: "1",
      uniswapMarket: "0xDd7dF3522a49e6e1127bf1A1d3bAEa3bc100583B",
    },
    // USDC
    {
      underlying: "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
      priceSource: "1",
      uniswapMarket: "0x1caD5f8f5D4C0AD49646B2565CC0cA725E4280EA",
    },
    // USDT
    {
      underlying: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
      priceSource: "1",
      uniswapMarket: "0x1caD5f8f5D4C0AD49646B2565CC0cA725E4280EA",
    },
    // ETH
    {
      underlying: "0x420000000000000000000000000000000000000a",
      priceSource: "1",
      uniswapMarket: "0xF5988809ac97C65121e2c34f5D49558e3D12C253",
    },
    // NETT
    {
      underlying: "0x90fE084F877C65e1b577c7b2eA64B8D8dd1AB278",
      priceSource: "1",
    },
    // TETHYS
    {
      underlying: "0x69fdb77064ec5c84FA2F21072973eB28441F43F3",
      priceSource: "1",
      uniswapMarket: "0xc9b290FF37fA53272e9D71A0B13a444010aF4497",
    },
    // Metis-FNR-NLP
    {
      underlying: "0xD18562C9388716cB6de537FF937f5c350d8abdE1",
      priceSource: "0",
    },
  ],

  cTokens: [
    "0x2e6e287A7503C9b0B39a8BBF633ad714b3DeE669", // fm.USDC
    "0x13969df5E449fF05040D71367cdA456384C96e7E", // fm.USDT
    "0x1D9a98832880c76d08bd9c4A4B2D466F8ECae8a2", // fMetis
    "0xaf29cb64C6CA9904b99c8B753dFE8E31752cbcf6", // fWETH
    "0x6cED181A4Fb8f31f861c9964746CB00D1C4e3935", // fNETT
    "0xcbf5cd580fC445300A259C741E6e5F862E841586", // fTETHYS
    "0x19E9FE1De21727Bb9D5D79d2CbE66BE208B3d3Cc" // f-Metis-FNR-NLP
  ],
};
