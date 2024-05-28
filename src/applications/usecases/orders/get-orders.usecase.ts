import Order from '@applications/domains/models/order.model'
import { OrderRepository } from '@applications/ports/repositories/order.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class GetOrdersUsecase {
	constructor(@Inject('OrderRepository') private readonly orderRepository: OrderRepository) {}

	public async handle(): Promise<Order[]> {
		const orders = await this.orderRepository.findAll()
		return orders
	}
}
