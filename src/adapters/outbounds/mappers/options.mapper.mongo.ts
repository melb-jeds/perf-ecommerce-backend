import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'
import { ClientSession, CreateOptions } from 'mongoose'

export class OptionsMapperMongo {
	public static toSchema(options: IRepositoryOptions): CreateOptions {
		const session = options?.session as ClientSession

		return {
			session,
		}
	}
}
