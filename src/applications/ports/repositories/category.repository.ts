import Category from '@applications/domains/models/category.model'
import { Repository } from '@applications/ports/repositories/repository'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'

export interface CategoryRepository extends Repository<Category> {
	findWithIds(ids: string[], options?: IRepositoryOptions): Promise<{ data: Category[]; found: Category[]; notFound: string[] }>
}
