import Product from '@applications/domains/models/product.model'
import Review from '@applications/domains/models/review.model'
import { Builder } from 'builder-pattern'

interface CreateProduct {
	name: string
	description: string
	price: number
	stock: number
	currency: string
	sellerId: string
	categoryIds: string[]
	images?: string[]
	createdAt?: Date
	updatedAt?: Date
	deletedAt?: Date | null
	reviews?: Review[]
}

export class ProductFactory {
	public static create(command: CreateProduct): Product {
		const {
			name,
			description,
			price,
			stock,
			currency,
			sellerId,
			categoryIds,
			images = [],
			createdAt = new Date(),
			updatedAt = new Date(),
			deletedAt = null,
			reviews = [],
		} = command

		return Builder(Product)
			.name(name)
			.description(description)
			.price(price)
			.stock(stock)
			.currency(currency)
			.images(images)
			.createdAt(createdAt)
			.updatedAt(updatedAt)
			.deletedAt(deletedAt)
			.sellerId(sellerId)
			.categoryIds(categoryIds)
			.reviews(reviews)
			.build()
	}
}
