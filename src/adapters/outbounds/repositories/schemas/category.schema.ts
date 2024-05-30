import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

@Schema({
	versionKey: false,
	collection: 'categories',
})
export class CategorySchema {
	_id: Types.ObjectId

	@Prop({ required: true })
	name: string
}

export const CategorySchemaMongo = SchemaFactory.createForClass(CategorySchema)
