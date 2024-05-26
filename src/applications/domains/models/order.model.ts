import Address from '@applications/domains/models/address.model'
import { OrderStatus } from '@commons/enums/order-status.enums'
import { Nullable } from '@commons/types/nullable.type'

export default class Order {
	id: string
	status: OrderStatus
	address: Address
	createdAt: Date
	updatedAt: Date
	shippedAt: Nullable<Date>
	deliveredAt: Nullable<Date>
	cancelledAt: Nullable<Date>
	customerId: string
	productId: string
}
