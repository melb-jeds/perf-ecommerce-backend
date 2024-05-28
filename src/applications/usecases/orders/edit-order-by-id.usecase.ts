import { EditOrderByIdCommand } from '@applications/commands/edit-order-by-id.command'
import { IdCommand } from '@applications/commands/id.command'
import Order from '@applications/domains/models/order.model'
import { OrderRepository } from '@applications/ports/repositories/order.repository'
import { OrderNotFoundException } from '@commons/exceptions/orders/order-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class EditOrderByIdUsecase {
	constructor(@Inject('OrderRepository') private readonly orderRepository: OrderRepository) {}

	public async handle(command: EditOrderByIdCommand): Promise<void> {
		await this.validate(command)

		const { id, address } = command
		await this.orderRepository.updateById(id, { address })
	}

	private async validate(command: IdCommand): Promise<Order> {
		const order = await this.orderRepository.findById(command.id)
		if (_.isEmpty(order)) throw new OrderNotFoundException()

		return order
	}
}
