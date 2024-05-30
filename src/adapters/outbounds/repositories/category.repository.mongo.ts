import Category from '@applications/domains/models/category.model'
import { CategoryRepository } from '@applications/ports/repositories/category.repository'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'
import { InjectModel } from '@nestjs/mongoose'
import * as _ from 'lodash'
import { Model } from 'mongoose'
import { CategoryMapperMongo } from 'src/adapters/outbounds/mappers/category.mapper.mongo'
import { RepositoryMongo } from 'src/adapters/outbounds/repositories/repository.mongo'
import { CategorySchema } from 'src/adapters/outbounds/repositories/schemas/category.schema'

export class CategoryRepositoryMongo extends RepositoryMongo<Category, CategorySchema> implements CategoryRepository {
	constructor(@InjectModel(CategorySchema.name) categoryModel: Model<CategorySchema>) {
		super(categoryModel, CategoryMapperMongo)
	}

	public async findWithIds(
		ids: string[],
		options?: IRepositoryOptions | undefined
	): Promise<{ data: Category[]; found: Category[]; notFound: string[] }> {
		const categoryDocs = await this.model.find({
			_id: {
				$in: ids,
			},
		})
		const categories = categoryDocs.map((doc) => CategoryMapperMongo.toDomain(doc))

		if (categories.length === ids.length) {
			return {
				data: categories,
				found: categories,
				notFound: [],
			}
		}

		const founds: Category[] = []
		const notFounds: string[] = []

		ids.forEach((id) => {
			const categoryDoc = categories.find((doc) => doc.id === id)
			if (!_.isEmpty(categoryDoc)) founds.push(categoryDoc)
			else notFounds.push(id)
		})

		return {
			data: categories,
			found: founds,
			notFound: notFounds,
		}
	}
}
