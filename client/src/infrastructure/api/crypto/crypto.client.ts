import axios, { AxiosInstance } from "axios";
import constants from "../../constants";

class MainRestClient {
  public instance: AxiosInstance;
  constructor() {
    const client = axios.create({
      baseURL: constants.MESSARI_API_URL,
    });
    this.instance = client;
  }
}

export default new MainRestClient();
