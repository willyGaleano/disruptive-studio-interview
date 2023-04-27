import { Module } from '@nestjs/common';
import { ApplicationCoreModule } from '../application-core/application-core.module';
import { CryptoAssetsController } from './controllers/crypto-assets.controller';

@Module({
  imports: [ApplicationCoreModule],
  controllers: [CryptoAssetsController],
})
export class UserInterfaceModule {}
