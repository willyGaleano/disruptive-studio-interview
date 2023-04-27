import { Injectable } from '@nestjs/common';
import * as data from '../data/cryptocurrencies.json';

@Injectable()
export class CryptoAssetsInteractor {
  async getListAssets() {
    try {
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
