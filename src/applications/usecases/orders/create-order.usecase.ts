import { CreateOrderCommand } from '@applications/commands/create-order.command'
import Order from '@applications/domains/models/order.model'
import Product from '@applications/domains/models/product.model'
import User from '@applications/domains/models/user.model'
import { OrderFactory } from '@applications/factories/order.factory'
import { OrderRepository } from '@applications/ports/repositories/order.repository'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { UserRepository } from '@applications/ports/repositories/user.repository'
import { ProductNotFoundException } from '@commons/exceptions/products/product-not-found.exception'
import { UserNotFoundException } from '@commons/exceptions/users/user-not-found.exception'
import { Inject, Injectable } from '@nestjs/common'
import * as _ from 'lodash'

@Injectable()
export class CreateOrderUsecase {
	constructor(
		@Inject('OrderRepository') private readonly orderRepository: OrderRepository,
		@Inject('UserRepository') private readonly userRepository: UserRepository,
		@Inject('ProductRepository') private readonly productRepository: ProductRepository
	) {}

	public async handle(command: CreateOrderCommand): Promise<Order> {
		await this.validate(command)

		const factory = OrderFactory.create(command)
		const order = await this.orderRepository.create(factory)

		return order
	}

	private async validate(command: CreateOrderCommand): Promise<{ customer: User; product: Product }> {
		const [customer, product] = await Promise.all([
			this.userRepository.findById(command.customerId),
			this.productRepository.findById(command.productId),
		])

		if (_.isEmpty(customer)) throw new UserNotFoundException()
		if (_.isEmpty(product)) throw new ProductNotFoundException()

		return { customer, product }
	}
}
