import Order from '@applications/domains/models/order.model'
import { IBaseRepository } from '@applications/ports/repositories/base.repository'

export interface OrderRepository extends IBaseRepository<Order> {}
