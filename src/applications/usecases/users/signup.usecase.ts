import { SignupCommand } from '@applications/commands/signup.command'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { EnvService } from '@applications/ports/services/env.service'
import { HashService } from '@applications/ports/services/hash.service'
import { EmailExistsException } from '@commons/exceptions/users/email-exists.exception'
import { Inject, Injectable } from '@nestjs/common'
import _ from 'lodash'

@Injectable()
export class SignupUsecase {
	constructor(
		@Inject('EnvService') private readonly envService: EnvService,
		@Inject('HashService') private readonly hashService: HashService,
		@Inject('UserRepository') private readonly userRepository: UserRepository
	) {}

	public async handle(command: SignupCommand): Promise<void> {
		await this.validate(command)

		const { name, email, password } = command
		const hashedPassword = this.hashService.hash(password, this.envService.getHashSalt())

		await this.userRepository.create({
			name,
			email,
			password: hashedPassword,
		})
	}

	private async validate(command: SignupCommand): Promise<void> {
		const user = await this.userRepository.findByEmail(command.email)
		if (!_.isEmpty(user)) throw new EmailExistsException()
	}
}
