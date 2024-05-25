import { OptionRepositoryCommand } from '@applications/commands/option-repository.command'
import { QueryType } from '@commons/types/query.type'

export interface BaseRepository<T, U> {
	create(body: U, options?: OptionRepositoryCommand): Promise<T>
	upsert(query: QueryType<T>, body: U, option?: OptionRepositoryCommand): Promise<T>
	updateOne(query: QueryType<T>, body: Partial<T>, option?: OptionRepositoryCommand): Promise<T>
	updateMany(query: QueryType<T>, body: Partial<T>, option?: OptionRepositoryCommand): Promise<T[]>
	deleteOne(query: QueryType<T>, option?: OptionRepositoryCommand): Promise<void>
	deleteMany(query: QueryType<T>, option?: OptionRepositoryCommand): Promise<void>
}
