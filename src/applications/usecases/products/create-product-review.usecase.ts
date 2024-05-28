import { CreateProductReviewCommand } from '@applications/commands/create-product-review.command'
import Product from '@applications/domains/models/product.model'
import { ProductReviewFactory } from '@applications/factories/product-review.factory'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { ProductNotFoundException } from '@commons/exceptions/products/product-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class CreateProductReviewUsecase {
	constructor(@Inject('ProductRepository') private readonly productRepository: ProductRepository) {}

	public async handle(command: CreateProductReviewCommand): Promise<void> {
		const product = await this.validate(command)

		const { id, ...review } = command
		const factory = ProductReviewFactory.create(review)
		await this.productRepository.createReviewById(product.id, factory)
	}

	private async validate(command: CreateProductReviewCommand): Promise<Product> {
		const product = await this.productRepository.findById(command.id)
		if (_.isEmpty(product)) throw new ProductNotFoundException()

		return product
	}
}
