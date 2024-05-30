import Address from '@applications/domains/models/address.model'
import { OrderStatus } from '@commons/enums/order-status.enums'
import { Nullable } from '@commons/types/nullable.type'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

@Schema({
	versionKey: false,
	collection: 'orders',
})
export class OrderSchema {
	_id: Types.ObjectId

	@Prop({ default: OrderStatus.Initiated })
	status: number

	@Prop({ required: true, schema: Address })
	address: Address

	@Prop({ default: new Date() })
	createdAt: Date

	@Prop({ default: new Date() })
	updatedAt: Date

	@Prop({ default: null })
	shippedAt: Nullable<Date>

	@Prop({ default: null })
	deliveredAt: Nullable<Date>

	@Prop({ default: null })
	cancelledAt: Nullable<Date>

	@Prop({ required: true })
	customerId: string

	@Prop({ required: true })
	productId: string
}

export const OrderSchemaMongo = SchemaFactory.createForClass(OrderSchema)
