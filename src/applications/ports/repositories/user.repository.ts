import User from '@applications/domains/models/user.model'
import { Repository } from '@applications/ports/repositories/repository.interface'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'

export interface UserRepository extends Repository<User> {
	findAll(options?: IRepositoryOptions): Promise<User[]>
	findByEmail(email: string, options?: IRepositoryOptions): Promise<User | null>
}
