import { CreateProductCommand } from '@applications/commands/create-product.command'
import Category from '@applications/domains/models/category.model'
import Product from '@applications/domains/models/product.model'
import User from '@applications/domains/models/user.model'
import { ProductFactory } from '@applications/factories/product.factory'
import { CategoryRepository } from '@applications/ports/repositories/category.repository'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { CategoryIdNotFoundException } from '@commons/exceptions/categories/category-id-not-found.exception'
import { UserNotFoundException } from '@commons/exceptions/users/user-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class CreateProductUsecase {
	constructor(
		@Inject('ProductRepository') private readonly productRepository: ProductRepository,
		@Inject('UserRepository') private readonly userRepository: UserRepository,
		@Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository
	) {}

	public async handle(command: CreateProductCommand): Promise<Product> {
		await this.validate(command)

		const factory = ProductFactory.create(command)
		const product = await this.productRepository.create(factory)

		return product
	}

	private async validate(command: CreateProductCommand): Promise<{ seller: User; categories: Category[] }> {
		const [seller, categories] = await Promise.all([
			this.userRepository.findById(command.sellerId),
			this.categoryRepository.findWithIds(command.categoryIds),
		])

		if (_.isEmpty(seller)) throw new UserNotFoundException()
		if (categories.notFound.length !== 0) throw new CategoryIdNotFoundException(categories.notFound[0])

		return {
			seller,
			categories: categories.data,
		}
	}
}
