import Address from '@applications/domains/models/address.model'
import { OrderStatus } from '@commons/enums/order-status.enums'

export interface CreateOrderRepositoryCommand {
	status: OrderStatus
	address: Address
	customerId: string
	productId: string
}
