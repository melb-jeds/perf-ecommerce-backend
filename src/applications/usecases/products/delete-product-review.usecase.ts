import { DeleteProductReviewCommand } from '@applications/commands/delete-product-review.command'
import Product from '@applications/domains/models/product.model'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { ProductNotFoundException } from '@commons/exceptions/products/product-not-found.exception'
import { ProductReviewNotFoundException } from '@commons/exceptions/products/product-review-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import _ from 'lodash'

@Injectable()
export class DeleteProductReviewUsecase {
	constructor(@Inject('ProductRepository') private readonly productRepository: ProductRepository) {}

	public async handle(command: DeleteProductReviewCommand): Promise<void> {
		await this.validate(command)

		await this.productRepository.deleteReviewById(command.productId, command.reviewId)
	}

	private async validate(command: DeleteProductReviewCommand): Promise<Product> {
		const product = await this.productRepository.findById(command.productId)
		if (_.isEmpty(product)) throw new ProductNotFoundException()
		if (_.isEmpty(product.reviews.find((review) => review.id === command.reviewId))) throw new ProductReviewNotFoundException()

		return product
	}
}
