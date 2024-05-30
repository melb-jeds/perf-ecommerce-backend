import Category from '@applications/domains/models/category.model'
import { Builder } from 'builder-pattern'
import { CategorySchema } from 'src/adapters/outbounds/repositories/schemas/category.schema'

export class CategoryMapperMongo {
	public static toDomain(document: CategorySchema): Category {
		return Builder(Category).id(document._id.toHexString()).name(document.name).build()
	}
}
