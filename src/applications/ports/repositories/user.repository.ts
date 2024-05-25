import { CreateUserRepositoryCommand } from '@applications/commands/create-user-repository.command'
import User from '@applications/domains/models/user.model'
import { BaseRepository } from '@applications/ports/repositories/base.repository'

export interface UserRepository extends BaseRepository<User, CreateUserRepositoryCommand> {}
