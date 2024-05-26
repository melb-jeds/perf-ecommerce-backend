import Category from '@applications/domains/models/category.model'
import { IBaseRepository } from '@applications/ports/repositories/base.repository'

export interface CategoryRepository extends IBaseRepository<Category> {}
