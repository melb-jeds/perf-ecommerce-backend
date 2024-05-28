import { SignInCommand } from '@applications/commands/sign-in.command'
import User from '@applications/domains/models/user.model'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { EnvService } from '@applications/ports/services/env.service'
import { HashService } from '@applications/ports/services/hash.service'
import { JwtService } from '@applications/ports/services/jwt.service'
import { InvalidSignInException } from '@commons/exceptions/users/invalid-sign-in.exception'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class SignInUsecase {
	constructor(
		@Inject('EnvService') private readonly envService: EnvService,
		@Inject('JwtService') private readonly jwtService: JwtService,
		@Inject('HashService') private readonly hashService: HashService,
		@Inject('UserRepository') private readonly userRepository: UserRepository
	) {}

	public async handle(command: SignInCommand): Promise<string> {
		const user = await this.validate(command)

		const isValidPassword = this.hashService.compare(command.password, user.password)
		if (!isValidPassword) throw new InvalidSignInException()

		const { password, ...userWithoutPassword } = user
		const token = this.jwtService.sign(userWithoutPassword, this.envService.getJwtPrivateKey())
		return token
	}

	private async validate(command: SignInCommand): Promise<User> {
		const user = this.userRepository.findByEmail(command.email)
		if (!!user) throw new InvalidSignInException()

		return user
	}
}
