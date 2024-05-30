import { ApplicationModule } from '@applications/application.module'
import { Module } from '@nestjs/common'
import { AdapterModule } from 'src/adapters/adapter.module'

@Module({
	imports: [ApplicationModule, AdapterModule],
})
export class AppModule {}
