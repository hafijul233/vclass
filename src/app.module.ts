import {Module} from '@nestjs/common';
import {AppController} from '@app/app.controller';
import {AppService} from '@app/app.service';
import {AppConfigModule} from "@app/config/app/config.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot({isGlobal: true}), AppConfigModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
