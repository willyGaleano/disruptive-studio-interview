import { Module } from '@nestjs/common';
import { CryptoAssetsInteractor } from './crypto-assets/crypto-assets.interactor';

const services = [CryptoAssetsInteractor];

@Module({
  imports: [],
  exports: services,
  providers: services,
})
export class ApplicationCoreModule {}
