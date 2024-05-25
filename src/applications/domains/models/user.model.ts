import { RoleEnum } from '@commons/enums/role.enum'

export default class User {
	id: string
	name: string
	email: string
	password: string
	role: RoleEnum
	createdAt: Date
	updatedAt: Date
}
