import { CreateOrderRepositoryCommand } from '@applications/commands/create-order-repository.command'
import Order from '@applications/domains/models/order.model'
import { BaseRepository } from '@applications/ports/repositories/base.repository'

export interface OrderRepository extends BaseRepository<Order, CreateOrderRepositoryCommand> {}
