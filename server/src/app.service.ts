import { Injectable } from '@nestjs/common';
// import sgMail from '@sendgrid/mail';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  sendEmail(): void {
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'marek.kustosz@gmail.com', // Change to your recipient
      from: 'marek.kustosz@coderscrew.pl', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
