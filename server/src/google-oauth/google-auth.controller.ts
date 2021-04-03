import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleOauthService } from './google-oauth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class GoogleOauthController {
  constructor(private readonly googleOauthService: GoogleOauthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return null;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.googleOauthService.googleLogin(req);
  }
}
