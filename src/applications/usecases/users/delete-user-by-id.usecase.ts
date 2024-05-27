import { IdCommand } from '@applications/commands/id.command'
import User from '@applications/domains/models/user.model'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { UserNotFoundException } from '@commons/exceptions/users/user-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import _ from 'lodash'

@Injectable()
export class DeleteUserByIdUsecase {
	constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

	public async handle(command: IdCommand): Promise<void> {
		const user = await this.validate(command)

		await this.userRepository.deleteById(user.id)
	}

	private async validate(command: IdCommand): Promise<User> {
		const user = await this.userRepository.findById(command.id)
		if (_.isEmpty(user)) throw new UserNotFoundException()

		return user
	}
}
