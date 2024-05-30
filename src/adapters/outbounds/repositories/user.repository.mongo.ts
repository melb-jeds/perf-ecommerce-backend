import User from '@applications/domains/models/user.model'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { OptionsMapperMongo } from 'src/adapters/outbounds/mappers/options.mapper.mongo'
import { UserMapperMongo } from 'src/adapters/outbounds/mappers/user.mapper.mongo'
import { RepositoryMongo } from 'src/adapters/outbounds/repositories/repository.mongo'
import { UserSchema } from 'src/adapters/outbounds/repositories/schemas/user.schema'

@Injectable()
export class UserRepositoryMongo extends RepositoryMongo<User, UserSchema> implements UserRepository {
	constructor(@InjectModel(UserSchema.name) model: Model<UserSchema>) {
		super(model, UserMapperMongo)
	}

	public async findByEmail(email: string, options?: IRepositoryOptions | undefined): Promise<User | null> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})
		const users = await this.model.find({ email }, mappedOptions)
		return users.length > 0 ? this.mapper.toDomain(users[0]) : null
	}
}
