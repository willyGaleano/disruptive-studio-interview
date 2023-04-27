import { CryptoAssetsInteractor } from './../../microservice/application-core/crypto-assets/crypto-assets.interactor';
import * as fs from 'fs-extra';

jest.mock('fs-extra');

describe('CryptoAssetsInteractor', () => {
  let cryptoAssetsInteractor: CryptoAssetsInteractor;

  beforeEach(() => {
    cryptoAssetsInteractor = new CryptoAssetsInteractor();
  });

  it('should return a list of assets', async () => {
    const mockResults = [
      { name: 'Bitcoin', symbol: 'BTC' },
      { name: 'Ethereum', symbol: 'ETH' },
    ];
    const mockReadStream = {
      pipe: jest.fn().mockReturnThis(),
      on: jest.fn().mockImplementation((event, callback) => {
        if (event === 'data') {
          mockResults.forEach(callback);
        } else if (event === 'end') {
          callback();
        } else if (event === 'error') {
          callback(new Error('An error occurred'));
        }
        return mockReadStream;
      }),
    };
    (fs as any).createReadStream.mockReturnValue(mockReadStream);

    const result = await cryptoAssetsInteractor.getListAssets();
    expect(result.data).toEqual(mockResults);
    expect(fs.createReadStream).toHaveBeenCalledWith(
      'src/microservice/application-core/data/cryptocurrencies.csv',
    );
  });
});
