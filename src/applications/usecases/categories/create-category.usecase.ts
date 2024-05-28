import { CreateCategoryCommand } from '@applications/commands/create-category.command'
import Category from '@applications/domains/models/category.model'
import { CategoryFactory } from '@applications/factories/category.factory'
import { CategoryRepository } from '@applications/ports/repositories/category.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreateCategoryUsecase {
	constructor(@Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

	public async handle(command: CreateCategoryCommand): Promise<Category> {
		const factory = CategoryFactory.create(command)
		const category = await this.categoryRepository.create(factory)

		return category
	}
}
