import User from '@applications/domains/models/user.model'
import { Builder } from 'builder-pattern'
import { UserSchema } from 'src/adapters/outbounds/repositories/schemas/user.schema'

export class UserMapperMongo {
	public static toDomain(document: UserSchema): User {
		return Builder(User)
			.id(document._id.toHexString())
			.name(document.name)
			.email(document.email)
			.password(document.password)
			.role(document.role)
			.createdAt(document.createdAt)
			.updatedAt(document.updatedAt)
			.deletedAt(document.deletedAt)
			.build()
	}
}
