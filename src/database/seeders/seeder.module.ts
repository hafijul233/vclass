import {MysqlDatabaseProviderModule} from "../../providers/database/mysql/provider.module";
import {Logger, Module} from "@nestjs/common";

/**
 * Import and provide seeder classes.
 *
 * @module
 */

let LanguageSeederModule;

@Module({
    imports: [MysqlDatabaseProviderModule, LanguageSeederModule],
    providers: [Logger, Seeder],
})
export class SeederModule {
}
