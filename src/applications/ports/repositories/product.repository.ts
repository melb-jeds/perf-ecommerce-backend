import { CreateReviewRepositoryCommand } from '@applications/commands/create-review-repository.command'
import Product from '@applications/domains/models/product.model'
import { IBaseRepository } from '@applications/ports/repositories/base.repository'

export interface ProductRepository extends IBaseRepository<Product> {
	createReview(id: string, body: CreateReviewRepositoryCommand): Promise<void>
}
