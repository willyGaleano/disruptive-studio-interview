import cryptoClient from "./crypto.client";
import { AssetsResponse } from "../../../application/dto";

const Paths = {
  getAllAssetsPath: (limit: number) =>
    `/assets?limit=${limit}&fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_1_hour,metrics/market_data/percent_change_usd_last_24_hours,metrics/marketcap/current_marketcap_usd,metrics/market_data/real_volume_last_24_hours,metrics/roi_data/percent_change_last_1_week,metrics/roi_data/percent_change_last_1_month,metrics/roi_data/percent_change_last_3_months,metrics/roi_data/percent_change_last_1_year,metrics/roi_data/percent_change_year_to_date`,
};

class CryptoRequests {
  public async getAllAssets(limit = 10): Promise<AssetsResponse> {
    const { data } = await cryptoClient.instance.get(
      Paths.getAllAssetsPath(limit)
    );

    return data;
  }
}

export default new CryptoRequests();
