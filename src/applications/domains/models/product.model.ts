import Category from '@domains/category.model'
import Review from '@domains/review.model'
import User from '@domains/user.model'

export default class Product {
	id: string
	title: string
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
