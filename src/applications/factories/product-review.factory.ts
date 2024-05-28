import Review from '@applications/domains/models/review.model'
import { Nullable } from '@commons/types/nullable.type'
import { Builder } from 'builder-pattern'

interface CreateProductReview {
	rating: number
	comment: string
	createdAt?: Date
	updatedAt?: Date
	deletedAt?: Nullable<Date>
	authorId: string
}

export class ProductReviewFactory {
	public static create(command: CreateProductReview): Review {
		const { rating, comment, createdAt = new Date(), updatedAt = new Date(), deletedAt = null, authorId } = command
		return Builder(Review)
			.rating(rating)
			.comment(comment)
			.createdAt(createdAt)
			.updatedAt(updatedAt)
			.deletedAt(deletedAt)
			.authorId(authorId)
			.build()
	}
}
