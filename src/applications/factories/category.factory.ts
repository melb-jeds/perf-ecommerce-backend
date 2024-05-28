import Category from '@applications/domains/models/category.model'
import { Builder } from 'builder-pattern'

interface CreateCategory {
	name: string
}

export class CategoryFactory {
	public static create(command: CreateCategory): Category {
		const { name } = command

		return Builder(Category).name(name).build()
	}
}
