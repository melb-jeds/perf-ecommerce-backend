import { Repository } from '@applications/ports/repositories/repository'
import { IMongoMapper } from '@commons/interfaces/mongo-mapper.interface'
import { IRepositoryOptions, IRepositoryUpdateOptions } from '@commons/interfaces/repository-options.interface'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { OptionsMapperMongo } from 'src/adapters/outbounds/mappers/options.mapper.mongo'

@Injectable()
export class RepositoryMongo<T, U> implements Repository<T> {
	protected model: Model<U>
	protected mapper: IMongoMapper<T>

	constructor(model: Model<any>, mapper: IMongoMapper<T>) {
		this.model = model
		this.mapper = mapper
	}

	public async create(command: Partial<T>, options?: IRepositoryOptions | undefined): Promise<T> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})
		const document = await this.model.create([command], mappedOptions)
		return this.mapper.toDomain(document[0])
	}

	public async findAll(options?: IRepositoryOptions | undefined): Promise<T[]> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})
		const documents = await this.model.find({ deletedAt: { $ne: null } }, {}, mappedOptions)
		return documents.map((doc) => this.mapper.toDomain(doc))
	}

	public async findById(id: string, options?: IRepositoryOptions | undefined): Promise<T | null> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})
		const document = await this.model.findOne({ _id: id, deletedAt: { $ne: null } }, mappedOptions)
		return document ? this.mapper.toDomain(document) : null
	}

	public async updateById(id: string, command: Partial<T>, options?: IRepositoryUpdateOptions | undefined): Promise<void> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})
		await this.model.findByIdAndUpdate(id, command as any, mappedOptions)
	}

	public async deleteById(id: string, options?: IRepositoryOptions | undefined): Promise<void> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})
		await this.model.findByIdAndUpdate(id, { $set: { deletedAt: new Date() } }, mappedOptions)
	}
}
