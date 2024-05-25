import User from '@applications/domains/models/user.model'
import { Nullable } from '@commons/types/nullable.type'

export default class Review {
	rating: number
	comment: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Nullable<Date>
	author: User
}
