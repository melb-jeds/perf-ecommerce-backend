import Order from '@applications/domains/models/order.model'
import { Repository } from '@applications/ports/repositories/repository.interface'

export interface OrderRepository extends Repository<Order> {}
