import Address from '@applications/domains/models/address.model'
import Order from '@applications/domains/models/order.model'
import { OrderStatus } from '@commons/enums/order-status.enums'
import { Nullable } from '@commons/types/nullable.type'
import { Builder } from 'builder-pattern'

interface CreateOrder {
	status?: OrderStatus
	address: Address
	createdAt?: Date
	updatedAt?: Date
	shippedAt?: Nullable<Date>
	deliveredAt?: Nullable<Date>
	cancelledAt?: Nullable<Date>
	customerId: string
	productId: string
}

export class OrderFactory {
	public static create(command: CreateOrder): Order {
		const {
			status = OrderStatus.Initiated,
			address,
			createdAt = new Date(),
			updatedAt = new Date(),
			shippedAt = null,
			deliveredAt = null,
			cancelledAt = null,
			customerId,
			productId,
		} = command

		return Builder(Order)
			.status(status)
			.address(address)
			.createdAt(createdAt)
			.updatedAt(updatedAt)
			.shippedAt(shippedAt)
			.deliveredAt(deliveredAt)
			.cancelledAt(cancelledAt)
			.customerId(customerId)
			.productId(productId)
			.build()
	}
}
