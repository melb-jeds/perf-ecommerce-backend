import { IMetaPagination } from '@commons/interfaces/meta-pagination.interface'
import { FilterQuery, InsertManyOptions, ProjectionType, QueryOptions, SaveOptions, UpdateQuery } from 'mongoose'

export interface IBaseRepository<T> {
	create(docs: T, options?: SaveOptions): Promise<T>

	createMany(docs: T[], options?: InsertManyOptions): Promise<T[]>

	findAll(filter: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions<T>): Promise<T[]>

	findOne(filter: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions<T>): Promise<T>

	findOneAndUpdate(filter: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions<T>): Promise<T>

	upsert(filter: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions<T>): Promise<T>

	findAndCount(filter: FilterQuery<T>, options?: QueryOptions<T>): Promise<{ data: T[]; meta: IMetaPagination }>

	updateOne(filter: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions<T>): Promise<unknown>

	updateMany(filter: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions<T>): Promise<unknown>

	removeOne(filter: FilterQuery<T>): Promise<T>

	removeMany(filter: FilterQuery<T>, options?: QueryOptions<T>): Promise<unknown>
}
