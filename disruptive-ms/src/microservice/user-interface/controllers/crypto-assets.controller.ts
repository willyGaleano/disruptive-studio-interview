import { Controller, Get } from '@nestjs/common';
import { CryptoAssetsInteractor } from '../../application-core/crypto-assets/crypto-assets.interactor';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Crypto-Assets')
@Controller('crypto-assets')
export class CryptoAssetsController {
  constructor(
    private readonly cryptoAssetsInteractor: CryptoAssetsInteractor,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Get list of crypto assets',
  })
  @Get('list')
  async getListAssets() {
    const response = await this.cryptoAssetsInteractor.getListAssets();
    return response;
  }
}
