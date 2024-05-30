import Product from '@applications/domains/models/product.model'
import Review from '@applications/domains/models/review.model'
import { ProductRepository } from '@applications/ports/repositories/product.repository'
import { IRepositoryOptions } from '@commons/interfaces/repository-options.interface'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { OptionsMapperMongo } from 'src/adapters/outbounds/mappers/options.mapper.mongo'
import { ProductMapperMongo } from 'src/adapters/outbounds/mappers/product.mapper.mongo'
import { RepositoryMongo } from 'src/adapters/outbounds/repositories/repository.mongo'
import { ProductSchema } from 'src/adapters/outbounds/repositories/schemas/product.schema'

@Injectable()
export class ProductRepositoryMongo extends RepositoryMongo<Product, ProductSchema> implements ProductRepository {
	constructor(@InjectModel(ProductSchema.name) model: Model<ProductSchema>) {
		super(model, ProductMapperMongo)
	}

	public async createReviewById(id: string, body: Partial<Review>, options?: IRepositoryOptions | undefined): Promise<void> {
		await this.model.findByIdAndUpdate(id, {
			$set: {
				reviews: body,
			},
		})
	}

	public async updateReviewById(
		productId: string,
		reviewId: string,
		body: Partial<Review>,
		options?: IRepositoryOptions | undefined
	): Promise<void> {
		await this.model.findOneAndUpdate(
			{ '_id': productId, 'reviews._id': reviewId },
			{
				$set: {
					'reviews.$.rating': body.rating,
					'reviews.$.comment': body.comment,
					'reviews.$.updatedAt': new Date(),
					'reviews.$.deletedAt': body.deletedAt,
				},
			},
			OptionsMapperMongo.toSchema(options || {})
		)
	}

	public async deleteReviewById(productId: string, reviewId: string, options?: IRepositoryOptions | undefined): Promise<void> {
		await this.model.findByIdAndUpdate(
			productId,
			{
				$pull: {
					reviews: { _id: reviewId },
				},
			},
			OptionsMapperMongo.toSchema(options || {})
		)
	}
}
