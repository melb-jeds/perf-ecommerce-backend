import Address from '@applications/domains/models/address.model'

export interface EditOrderByIdCommand {
	id: string
	address: Address
}
