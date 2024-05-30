import { Nullable } from '@commons/types/nullable.type'
import { Types } from 'mongoose'

export class ReviewSubSchema {
	_id: Types.ObjectId
	rating: number
	comment: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Nullable<Date>
	authorId: string
}
