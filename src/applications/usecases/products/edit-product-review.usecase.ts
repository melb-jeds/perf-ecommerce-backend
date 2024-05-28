import { EditProductReviewCommand } from '@applications/commands/edit-product-review.command'
import Product from '@applications/domains/models/product.model'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { ProductNotFoundException } from '@commons/exceptions/products/product-not-found.exception'
import { ProductReviewNotFoundException } from '@commons/exceptions/products/product-review-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class EditProductReviewUsecase {
	constructor(@Inject('ProductRepository') private readonly productRepository: ProductRepository) {}

	public async handle(command: EditProductReviewCommand): Promise<void> {
		const product = await this.validate(command)

		const { productId, reviewId, ...review } = command
		await this.productRepository.updateReviewById(productId, reviewId, review)
	}

	private async validate(command: EditProductReviewCommand): Promise<Product> {
		const product = await this.productRepository.findById(command.productId)
		if (_.isEmpty(product)) throw new ProductNotFoundException()
		if (_.isEmpty(product.reviews.find((review) => review.id === command.reviewId))) throw new ProductReviewNotFoundException()

		return product
	}
}
