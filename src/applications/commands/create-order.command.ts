import Address from '@applications/domains/models/address.model'

export interface CreateOrderCommand {
	address: Address
	customerId: string
	productId: string
}
