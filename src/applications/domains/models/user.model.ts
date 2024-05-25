import { RoleEnum } from '@commons/enums/role.enum'
import { Nullable } from '@commons/types/nullable.type'

export default class User {
	id: string
	name: string
	email: string
	password: string
	role: RoleEnum
	createdAt: Date
	updatedAt: Date
	deletedAt: Nullable<Date>
}
