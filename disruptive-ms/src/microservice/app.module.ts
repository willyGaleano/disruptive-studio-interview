import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './infrastructure/configuration/env/config';
import { JoiValidationEnv } from './infrastructure/configuration/env/joi.validation';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { ApplicationCoreModule } from './application-core/application-core.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validationSchema: JoiValidationEnv,
    }),
    UserInterfaceModule,
    ApplicationCoreModule,
  ],
})
export class AppModule {}
