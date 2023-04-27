import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as csvParser from 'csv-parser';

@Injectable()
export class CryptoAssetsInteractor {
  async getListAssets() {
    try {
      const results = [];
      const promise = new Promise((resolve, reject) => {
        fs.createReadStream(
          'src/microservice/application-core/data/cryptocurrencies.csv',
        )
          .pipe(csvParser())
          .on('data', (data) => results.push(data))
          .on('end', () => {
            console.log('CSV file successfully processed');
            resolve(results);
          })
          .on('error', (err) => {
            reject(err);
          });
      });
      const response = await promise;
      return { data: response };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
