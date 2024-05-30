import { Global, Module } from '@nestjs/common'
import { EnvService } from 'src/adapters/outbounds/services/env.service'
import { HashService } from 'src/adapters/outbounds/services/hash.service'
import { JwtService } from 'src/adapters/outbounds/services/jwt.service'

@Global()
@Module({
	providers: [
		{
			provide: 'EnvService',
			useClass: EnvService,
		},
		{
			provide: 'HashService',
			useClass: HashService,
		},
		{
			provide: 'JwtService',
			useClass: JwtService,
		},
	],
	exports: ['EnvService', 'HashService', 'JwtService'],
})
export class ServiceModule {}
