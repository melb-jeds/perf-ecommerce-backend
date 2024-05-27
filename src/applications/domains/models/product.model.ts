import Review from '@applications/domains/models/review.model'
import User from '@applications/domains/models/user.model'
import { Nullable } from '@commons/types/nullable.type'

export default class Product {
	id: string
	name: string
	description: string
	price: number
	stock: number
	currency: string
	images: string[]
	createdAt: Date
	updatedAt: Date
	deletedAt: Nullable<Date>
	seller: User
	categoryIds: string[]
	reviews: Review[]
}
