import { Module } from '@nestjs/common';
import { GoogleOauthService } from './google-oauth.service';
import { GoogleOauthStrategy } from './google-oauth.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [GoogleOauthService, GoogleOauthStrategy],
})
export class GoogleOauthModule {}
