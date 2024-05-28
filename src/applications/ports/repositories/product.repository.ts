import Product from '@applications/domains/models/product.model'
import Review from '@applications/domains/models/review.model'
import { Repository } from '@applications/ports/repositories/repository'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'

export interface ProductRepository extends Repository<Product> {
	createReviewById(id: string, body: Partial<Review>, options?: IRepositoryOptions): Promise<void>
	updateReviewById(productId: string, reviewId: string, body: Partial<Review>, options?: IRepositoryOptions): Promise<void>
	deleteReviewById(productId: string, reviewId: string, options?: IRepositoryOptions): Promise<void>
}
