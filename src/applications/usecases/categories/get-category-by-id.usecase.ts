import { IdCommand } from '@applications/commands/id.command'
import Category from '@applications/domains/models/category.model'
import { CategoryRepository } from '@applications/ports/repositories/category.repository'
import { CategoryNotFoundException } from '@commons/exceptions/categories/category-id-not-found.exception copy'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class GetCategoryByIdUsecase {
	constructor(@Inject('CategoryRepository') private readonly categoryRepository: CategoryRepository) {}

	public async handle(command: IdCommand): Promise<Category> {
		const category = await this.categoryRepository.findById(command.id)
		if (_.isEmpty(category)) throw new CategoryNotFoundException()

		return category
	}
}
