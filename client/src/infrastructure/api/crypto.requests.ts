import { AssetsResponse, DataAsset } from "../../application/dto";
import constants from "../constants";
import { MainRestClient } from "./main.client";

const Paths = {
  getAllAssetsPath: (limit: number) =>
    `/v2/assets?limit=${limit}&fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_1_hour,metrics/market_data/percent_change_usd_last_24_hours,metrics/marketcap/current_marketcap_usd,metrics/market_data/real_volume_last_24_hours,metrics/roi_data/percent_change_last_1_week,metrics/roi_data/percent_change_last_1_month,metrics/roi_data/percent_change_last_3_months,metrics/roi_data/percent_change_last_1_year,metrics/roi_data/percent_change_year_to_date`,
};

class CryptoRequests {
  constructor(
    private cryptoClient = new MainRestClient(constants.MESSARI_API_URL, {
      "Content-Type": "application/json",
      "x-messari-api-key": constants.MESSARI_API_KEY,
    })
  ) {}

  public async getAllAssets(limit = 10): Promise<AssetsResponse> {
    try {
      const { data } = await this.cryptoClient.instance.get(
        Paths.getAllAssetsPath(limit)
      );

      return data;
    } catch (error) {
      console.log(error);
      return { data: [] as DataAsset[] } as AssetsResponse;
    }
  }
}

export default new CryptoRequests();
