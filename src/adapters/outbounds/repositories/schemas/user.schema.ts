import { Nullable } from '@commons/types/nullable.type'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

@Schema({
	versionKey: false,
	collection: 'users',
})
export class UserSchema {
	_id: Types.ObjectId

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	email: string

	@Prop({ required: true })
	password: string

	@Prop({ required: true })
	role: number

	@Prop({ default: new Date() })
	createdAt: Date

	@Prop({ default: new Date() })
	updatedAt: Date

	@Prop({ default: null })
	deletedAt: Nullable<Date>
}

export const UserSchemaMongo = SchemaFactory.createForClass(UserSchema)
