import { Global, Module } from '@nestjs/common'
import { DatabaseModule } from 'src/adapters/outbounds/database/database.module'
import { ServiceModule } from 'src/adapters/outbounds/services/service.module'

@Global()
@Module({
	imports: [DatabaseModule, ServiceModule],
})
export class AdapterModule {}
