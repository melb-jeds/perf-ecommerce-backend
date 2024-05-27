import { EditProductByIdCommand } from '@applications/commands/edit-product-by-id.command'
import Product from '@applications/domains/models/product.model'
import { CategoryRepository } from '@applications/ports/repositories/category.repository'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { CategoryIdNotFoundException } from '@commons/exceptions/categories/category-id-not-found.exception'
import { ProductNotFoundException } from '@commons/exceptions/products/product-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import _ from 'lodash'

@Injectable()
export class EditProductByIdUsecase {
	constructor(
		@Inject('ProductRepository') private readonly productRepository: ProductRepository,
		@Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
	) {}

	public async handle(command: EditProductByIdCommand): Promise<void> {
		await this.validate(command)

		const { id, ...body } = command
		await this.productRepository.updateById(id, body)
	}

	private async validate(command: EditProductByIdCommand): Promise<Product> {
		const [product, categories] = await Promise.all([
			this.productRepository.findById(command.id),
			this.categoryRepository.findWithIds(command.categoryIds),
		])

		if (_.isEmpty(product)) throw new ProductNotFoundException()
		if (categories.notFound.length !== 0) throw new CategoryIdNotFoundException(categories.notFound.length[0])

		return product
	}
}
