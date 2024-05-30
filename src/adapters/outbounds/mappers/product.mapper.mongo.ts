import Product from '@applications/domains/models/product.model'
import Review from '@applications/domains/models/review.model'
import { Builder } from 'builder-pattern'
import { ProductSchema } from 'src/adapters/outbounds/repositories/schemas/product.schema'
import { ReviewSubSchema } from 'src/adapters/outbounds/repositories/schemas/review.sub-schema'

export class ProductMapperMongo {
	public static toDomain(document: ProductSchema): Product {
		return Builder(Product)
			.id(document._id.toHexString())
			.name(document.name)
			.description(document.description)
			.price(document.price)
			.stock(document.stock)
			.currency(document.currency)
			.images(document.images)
			.createdAt(document.createdAt)
			.updatedAt(document.updatedAt)
			.deletedAt(document.deletedAt)
			.sellerId(document.sellerId)
			.categoryIds(document.categoryIds)
			.reviews(document.reviews.map((review) => this.reviewToDomain(review)))
			.build()
	}

	private static reviewToDomain(document: ReviewSubSchema): Review {
		return Builder(Review)
			.id(document._id.toHexString())
			.rating(document.rating)
			.comment(document.comment)
			.createdAt(document.createdAt)
			.updatedAt(document.updatedAt)
			.deletedAt(document.deletedAt)
			.authorId(document.authorId)
			.build()
	}
}
