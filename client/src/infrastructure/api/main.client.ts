import axios, { AxiosInstance } from "axios";

export class MainRestClient {
  public instance: AxiosInstance;
  constructor(baseURL: string, headers?: any) {
    const client = axios.create({
      baseURL,
      headers,
    });
    this.instance = client;
  }
}
