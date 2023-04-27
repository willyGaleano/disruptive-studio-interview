import { AssetsListResponse } from "../../application/dto";
import constants from "../constants";
import { MainRestClient } from "./main.client";

const Paths = {
  listAssetsPath: "/v1/crypto-assets/list",
};

class CryptoCalculatorRequests {
  constructor(
    private cryptoCalculatorClient = new MainRestClient(
      constants.CRYPTO_CALCULATOR_API_URL,
      {
        "Content-Type": "application/json",
      }
    )
  ) {}

  public async getListAssets(): Promise<AssetsListResponse> {
    try {
      const { data } = await this.cryptoCalculatorClient.instance.get(
        Paths.listAssetsPath
      );
      return data;
    } catch (error) {
      console.log(error);
      return { data: [] } as AssetsListResponse;
    }
  }
}

export default new CryptoCalculatorRequests();
