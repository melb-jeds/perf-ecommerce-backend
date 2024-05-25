import { CreateProductRepositoryCommand } from '@applications/commands/create-product-repository.command'
import { CreateReviewRepositoryCommand } from '@applications/commands/create-review-repository.command'
import Product from '@applications/domains/models/product.model'
import { BaseRepository } from '@applications/ports/repositories/base.repository'

export interface ProductRepository extends BaseRepository<Product, CreateProductRepositoryCommand> {
	createReview(id: string, body: CreateReviewRepositoryCommand): Promise<void>
}
