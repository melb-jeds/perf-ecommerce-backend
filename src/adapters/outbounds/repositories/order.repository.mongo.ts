import Order from '@applications/domains/models/order.model'
import { OrderRepository } from '@applications/ports/repositories/order.repository'
import { OrderStatus } from '@commons/enums/order-status.enums'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { OptionsMapperMongo } from 'src/adapters/outbounds/mappers/options.mapper.mongo'
import { OrderMapperMongo } from 'src/adapters/outbounds/mappers/order.mapper.mongo'
import { RepositoryMongo } from 'src/adapters/outbounds/repositories/repository.mongo'
import { OrderSchema } from 'src/adapters/outbounds/repositories/schemas/order.schema'

@Injectable()
export class OrderRepositoryMongo extends RepositoryMongo<Order, OrderSchema> implements OrderRepository {
	constructor(@InjectModel(OrderSchema.name) orderModel: Model<OrderSchema>) {
		super(orderModel, OrderMapperMongo)
	}

	public async cancelById(id: string, options?: IRepositoryOptions | undefined): Promise<void> {
		const mappedOptions = OptionsMapperMongo.toSchema(options || {})

		await this.model.findByIdAndUpdate(
			id,
			{
				$set: {
					status: OrderStatus.Canceled,
				},
			},
			mappedOptions
		)
	}
}
