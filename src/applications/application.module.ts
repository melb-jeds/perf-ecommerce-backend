import usecases from '@applications/usecases'
import { Global, Module } from '@nestjs/common'

@Global()
@Module({
	providers: usecases,
	exports: usecases,
})
export class ApplicationModule {}
