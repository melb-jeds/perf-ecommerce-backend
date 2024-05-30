import { Global, Module } from '@nestjs/common'
import { DatabaseModule } from 'src/adapters/outbounds/database/database.module'

@Global()
@Module({
	imports: [DatabaseModule],
})
export class AdapterModule {}
