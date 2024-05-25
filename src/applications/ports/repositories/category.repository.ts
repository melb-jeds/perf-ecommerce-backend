import { CreateCategoryRepositoryCommand } from '@applications/commands/create-category-repository.command'
import Category from '@applications/domains/models/category.model'
import { BaseRepository } from '@applications/ports/repositories/base.repository'

export interface CategoryRepository extends BaseRepository<Category, CreateCategoryRepositoryCommand> {}
