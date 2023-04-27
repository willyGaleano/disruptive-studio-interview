import { useEffect, useState } from "react";
import cryptoRequests from "../../infrastructure/api/crypto.requests";
import { AssetsTableData, DataAsset } from "../dto";

export const useGetAssests = () => {
  const [cryptoData, setCryptoData] = useState<AssetsTableData[]>([]);   
  
  useEffect(() => {
    (async () => {
      const {data} = await cryptoRequests.getAllAssets();
      const resp = getAssetsByInterview(data);
      const respFormat = formatAssets(resp);
      setCryptoData(respFormat);
    })();
  }, []);
  

  return [cryptoData];
};

const symbolAssets = [
  "BTC",
  "ETH",
  "ADA",
]

const getAssetsByInterview = (cryptoData: DataAsset[]) : DataAsset[] => {
  const assetsByInterview = cryptoData.filter((item) => {
    for(const symbol of symbolAssets) {
      if(item.symbol === symbol) {
        return true;
      }
    }    
  });
  return assetsByInterview;
}

const formatAssets = (cryptoData: DataAsset[]) : AssetsTableData[] => {
  const assetsFormat = [];
  for(const item of cryptoData) {
    assetsFormat.push({
      id: item.id,
      logo: `https://asset-images.messari.io/images/${item.id}/32.png?v=2`,
      name: item.name,
      symbol: item.symbol,
      price_usd: item.metrics.market_data.price_usd,
      percent_change_usd_last_1_hour: item.metrics.market_data.percent_change_usd_last_1_hour,
      percent_change_usd_last_24_hours: item.metrics.market_data.percent_change_usd_last_24_hours,
      img_7d_day_trend: `https://data.messari.io/api/v1/assets/${item.id}/metrics/market-data/history/sl.png?width=140&height=30`,
      current_marketcap_usd: item.metrics.marketcap.current_marketcap_usd,
      real_volume_last_24_hours: item.metrics.market_data.real_volume_last_24_hours,
      percent_change_last_1_week: item.metrics.roi_data.percent_change_last_1_week,
      percent_change_last_1_month: item.metrics.roi_data.percent_change_last_1_month,
      percent_change_last_3_months: item.metrics.roi_data.percent_change_last_3_months,
      percent_change_last_1_year: item.metrics.roi_data.percent_change_last_1_year,
      percent_change_year_to_date: item.metrics.roi_data.percent_change_year_to_date,
    } as AssetsTableData);
  }
  return assetsFormat;
}
