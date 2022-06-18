import {registerAs} from '@nestjs/config';

export default registerAs('mysql', () => ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}));
