import { IdCommand } from '@applications/commands/id.command'
import Order from '@applications/domains/models/order.model'
import { OrderRepository } from '@applications/ports/repositories/order.repository'
import { OrderNotFoundException } from '@commons/exceptions/orders/order-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import _ from 'lodash'

@Injectable()
export class GetOrderByIdUsecase {
	constructor(@Inject('OrderRepository') private readonly orderRepository: OrderRepository) {}

	public async handle(command: IdCommand): Promise<Order> {
		const order = await this.orderRepository.findById(command.id)
		if (_.isEmpty(order)) throw new OrderNotFoundException()

		return order
	}
}
