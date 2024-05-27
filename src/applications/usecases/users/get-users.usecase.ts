import User from '@applications/domains/models/user.model'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class GetUsersUsecase {
	constructor(@Inject('UserRepository') private readonly userRepository: UserRepository) {}

	public async handle(): Promise<User[]> {
		const users = this.userRepository.findAll()
		return users
	}
}
