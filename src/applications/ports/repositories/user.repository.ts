import User from '@applications/domains/models/user.model'
import { Repository } from '@applications/ports/repositories/repository.interface'

export interface UserRepository extends Repository<User> {}
