export interface IMongoMapper<T> {
	toDomain(data: any): T
}
