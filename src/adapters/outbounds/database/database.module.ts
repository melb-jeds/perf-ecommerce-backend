import { Global, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CategoryRepositoryMongo } from 'src/adapters/outbounds/repositories/category.repository.mongo'
import { OrderRepositoryMongo } from 'src/adapters/outbounds/repositories/order.repository.mongo'
import { ProductRepositoryMongo } from 'src/adapters/outbounds/repositories/product.repository.mongo'
import { CategorySchema, CategorySchemaMongo } from 'src/adapters/outbounds/repositories/schemas/category.schema'
import { OrderSchema, OrderSchemaMongo } from 'src/adapters/outbounds/repositories/schemas/order.schema'
import { ProductSchema, ProductSchemaMongo } from 'src/adapters/outbounds/repositories/schemas/product.schema'
import { UserSchema, UserSchemaMongo } from 'src/adapters/outbounds/repositories/schemas/user.schema'
import { UserRepositoryMongo } from 'src/adapters/outbounds/repositories/user.repository.mongo'

@Global()
@Module({
	imports: [
		MongooseModule.forRoot(process.env.MONGODB_URI || ''),
		MongooseModule.forFeature([
			{ name: UserSchema.name, schema: UserSchemaMongo },
			{ name: ProductSchema.name, schema: ProductSchemaMongo },
			{ name: OrderSchema.name, schema: OrderSchemaMongo },
			{ name: CategorySchema.name, schema: CategorySchemaMongo },
		]),
	],
	providers: [
		{
			provide: 'UserRepository',
			useClass: UserRepositoryMongo,
		},
		{
			provide: 'ProductRepository',
			useClass: ProductRepositoryMongo,
		},
		{
			provide: 'OrderRepository',
			useClass: OrderRepositoryMongo,
		},
		{
			provide: 'CategoryRepository',
			useClass: CategoryRepositoryMongo,
		},
	],
	exports: ['UserRepository', 'ProductRepository', 'OrderRepository', 'CategoryRepository'],
})
export class DatabaseModule {}
