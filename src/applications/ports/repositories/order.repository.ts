import Order from '@applications/domains/models/order.model'
import { Repository } from '@applications/ports/repositories/repository'

export interface OrderRepository extends Repository<Order> {
	cancelById(id: string): Promise<void>
}
