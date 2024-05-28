import { IdCommand } from '@applications/commands/id.command'
import Product from '@applications/domains/models/product.model'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { ProductNotFoundException } from '@commons/exceptions/products/product-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class DeleteProductByIdUsecase {
	constructor(@Inject('ProductRepository') private readonly productRepository: ProductRepository) {}

	public async handle(command: IdCommand): Promise<void> {
		const product = await this.validate(command)

		await this.productRepository.deleteById(product.id)
	}

	private async validate(command: IdCommand): Promise<Product> {
		const product = await this.productRepository.findById(command.id)
		if (_.isEmpty(product)) throw new ProductNotFoundException()

		return product
	}
}
