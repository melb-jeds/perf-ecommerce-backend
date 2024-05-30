import Order from '@applications/domains/models/order.model'
import { Builder } from 'builder-pattern'
import { OrderSchema } from 'src/adapters/outbounds/repositories/schemas/order.schema'

export class OrderMapperMongo {
	public static toDomain(document: OrderSchema): Order {
		return Builder(Order)
			.id(document._id.toHexString())
			.status(document.status)
			.address(document.address)
			.createdAt(document.createdAt)
			.updatedAt(document.updatedAt)
			.shippedAt(document.shippedAt)
			.deliveredAt(document.deliveredAt)
			.cancelledAt(document.cancelledAt)
			.customerId(document.customerId)
			.productId(document.productId)
			.build()
	}
}
