import { ApplicationModule } from '@applications/application.module'
import { Module } from '@nestjs/common'
import { AdapterModule } from 'src/adapters/adapter.module'
import { ServiceModule } from 'src/adapters/outbounds/services/service.module'

@Module({
	imports: [ApplicationModule, AdapterModule, ServiceModule],
})
export class AppModule {}
