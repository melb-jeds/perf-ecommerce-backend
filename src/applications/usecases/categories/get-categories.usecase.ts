import Category from '@applications/domains/models/category.model'
import { CategoryRepository } from '@applications/ports/repositories/category.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class GetCategoriesUsecase {
	constructor(@Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

	public async handle(): Promise<Category[]> {
		const category = await this.categoryRepository.findAll()
		return category
	}
}
