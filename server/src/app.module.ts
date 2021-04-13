import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GoogleOauthModule } from './google-oauth/google-oauth.module';
import { GoogleOauthController } from './google-oauth/google-auth.controller';
import { GoogleOauthService } from './google-oauth/google-oauth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.sendgrid.env'],
      isGlobal: true,
    }),
    CatsModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: join(process.cwd(), 'schema/schema.gql'),
      autoSchemaFile: 'schema/schema.gql',
    }),
    MongooseModule.forRoot(process.env.DB_CONNECTION_STRING),
    GoogleOauthModule,
  ],
  controllers: [AppController, GoogleOauthController],
  providers: [AppService, GoogleOauthService],
})
export class AppModule {}
