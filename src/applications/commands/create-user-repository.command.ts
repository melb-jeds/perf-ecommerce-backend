import { RoleEnum } from '@commons/enums/role.enum'

export interface CreateUserRepositoryCommand {
	name: string
	email: string
	password: string
	role: RoleEnum
}
