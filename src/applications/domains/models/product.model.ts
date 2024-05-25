import Category from '@applications/domains/models/category.model'
import Review from '@applications/domains/models/review.model'
import User from '@applications/domains/models/user.model'

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
	seller: User
	categories: Category[]
	reviews: Review[]
}
