import Category from '@applications/domains/models/category.model'
import { Repository } from '@applications/ports/repositories/repository.interface'

export interface CategoryRepository extends Repository<Category> {}
