import { Nullable } from '@commons/types/nullable.type'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'
import { ReviewSubSchema } from 'src/adapters/outbounds/repositories/schemas/review.sub-schema'

@Schema({
	versionKey: false,
	collection: 'products',
})
export class ProductSchema {
	_id: Types.ObjectId

	@Prop({ required: true })
	name: string

	@Prop({ required: true })
	description: string

	@Prop({ required: true })
	price: number

	@Prop({ required: true })
	stock: number

	@Prop({ required: true })
	currency: string

	@Prop({ required: true })
	images: string[]

	@Prop({ default: new Date() })
	createdAt: Date

	@Prop({ default: new Date() })
	updatedAt: Date

	@Prop({ default: null, type: 'date' })
	deletedAt: Nullable<Date>

	@Prop({ required: true })
	sellerId: string

	@Prop({ required: true })
	categoryIds: string[]

	@Prop({ default: [], _id: true, schema: [ReviewSubSchema] })
	reviews: ReviewSubSchema[]
}

export const ProductSchemaMongo = SchemaFactory.createForClass(ProductSchema)
