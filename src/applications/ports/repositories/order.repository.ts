import Order from '@applications/domains/models/order.model'
import { Repository } from '@applications/ports/repositories/repository'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'

export interface OrderRepository extends Repository<Order> {
	cancelById(id: string, options?: IRepositoryOptions): Promise<void>
}
