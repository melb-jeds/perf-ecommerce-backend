import Product from '@applications/domains/models/product.model'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class GetProductsUsecase {
	constructor(@Inject('ProductRepository') private readonly productRepository: ProductRepository) {}

	public async handle(): Promise<Product[]> {
		const products = await this.productRepository.findAll()
		return products
	}
}
