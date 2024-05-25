import { OrderStatus } from '@commons/enums/order-status.enums'
import { Nullable } from '@commons/types/nullable.type'
import Address from '@domains/address.model'
import Product from '@domains/product.model'
import User from '@domains/user.model'

export default class Order {
	id: string
	status: OrderStatus
	address: Address
	createdAt: Date
	updatedAt: Date
	shippedAt: Nullable<Date>
	deliveredAt: Nullable<Date>
	customer: User
	product: Product
}
