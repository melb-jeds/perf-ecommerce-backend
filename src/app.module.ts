import { ApplicationModule } from '@applications/application.module'
import { Module } from '@nestjs/common'

@Module({
	imports: [ApplicationModule],
})
export class AppModule {}
