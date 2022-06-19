import {registerAs} from '@nestjs/config';

export default registerAs('mail', () => ({
    driver: process.env.MAIL_DRIVER,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    encryption: process.env.MAIL_ENCRYPTION,
    email: process.env.MAIL_EMAIL,
    sender: process.env.MAIL_SENDER,
}));
