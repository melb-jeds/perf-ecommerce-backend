import User from '@applications/domains/models/user.model'
import { IBaseRepository } from '@applications/ports/repositories/base.repository'

export interface UserRepository extends IBaseRepository<User> {}
