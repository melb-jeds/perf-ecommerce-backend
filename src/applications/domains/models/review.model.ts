import { Nullable } from '@commons/types/nullable.type'

export default class Review {
	rating: number
	comment: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Nullable<Date>
	authorId: string
}
