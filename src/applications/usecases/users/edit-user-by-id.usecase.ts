import { EditUserByIdCommand } from '@applications/commands/edit-user-by-id.command'
import User from '@applications/domains/models/user.model'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { UserNotFoundException } from '@commons/exceptions/users/user-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import _ from 'lodash'

@Injectable()
export class EditUserByIdUsecase {
	constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

	public async handle(command: EditUserByIdCommand): Promise<void> {
		await this.validate(command)

		const { id, ...body } = command
		await this.userRepository.updateById(id, body)
	}

	private async validate(command: EditUserByIdCommand): Promise<User> {
		const user = await this.userRepository.findById(command.id)
		if (_.isEmpty(user)) throw new UserNotFoundException()

		return user
	}
}
