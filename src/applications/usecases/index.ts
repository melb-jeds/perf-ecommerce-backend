import { CreateCategoryUsecase } from '@applications/usecases/categories/create-category.usecase'
import { DeleteCategoryByIdUsecase } from '@applications/usecases/categories/delete-category-by-id.usecase'
import { GetCategoriesUsecase } from '@applications/usecases/categories/get-categories.usecase'
import { GetCategoryByIdUsecase } from '@applications/usecases/categories/get-category-by-id.usecase'
import { CancelOrderByIdUsecase } from '@applications/usecases/orders/cancel-order-by-id.usecase'
import { CreateOrderUsecase } from '@applications/usecases/orders/create-order.usecase'
import { DeleteOrderByIdUsecase } from '@applications/usecases/orders/delete-order-by-id.usecase'
import { EditOrderByIdUsecase } from '@applications/usecases/orders/edit-order-by-id.usecase'
import { GetOrderByIdUsecase } from '@applications/usecases/orders/get-order-by-id.usecase'
import { GetOrdersUsecase } from '@applications/usecases/orders/get-orders.usecase'
import { CreateProductReviewUsecase } from '@applications/usecases/products/create-product-review.usecase'
import { CreateProductUsecase } from '@applications/usecases/products/create-product.usecase'
import { DeleteProductByIdUsecase } from '@applications/usecases/products/delete-product-by-id.usecase'
import { DeleteProductReviewUsecase } from '@applications/usecases/products/delete-product-review.usecase'
import { EditProductByIdUsecase } from '@applications/usecases/products/edit-product-by-id.usecase'
import { EditProductReviewUsecase } from '@applications/usecases/products/edit-product-review.usecase'
import { GetProductByIdUsecase } from '@applications/usecases/products/get-product-by-id.usecase'
import { GetProductsUsecase } from '@applications/usecases/products/get-products.usecase'
import { DeleteUserByIdUsecase } from '@applications/usecases/users/delete-user-by-id.usecase'
import { EditUserByIdUsecase } from '@applications/usecases/users/edit-user-by-id.usecase'
import { GetUserByIdUsecase } from '@applications/usecases/users/get-user-by-id.usecase'
import { GetUsersUsecase } from '@applications/usecases/users/get-users.usecase'
import { SignInUsecase } from '@applications/usecases/users/sign-in.usecase'
import { SignupUsecase } from '@applications/usecases/users/signup.usecase'
import * as _ from 'lodash'

const users = [SignInUsecase, SignupUsecase, GetUsersUsecase, GetUserByIdUsecase, EditUserByIdUsecase, DeleteUserByIdUsecase]

const products = [
	CreateProductUsecase,
	CreateProductReviewUsecase,
	GetProductsUsecase,
	GetProductByIdUsecase,
	EditProductByIdUsecase,
	EditProductReviewUsecase,
	DeleteProductByIdUsecase,
	DeleteProductReviewUsecase,
]

const orders = [CreateOrderUsecase, GetOrdersUsecase, GetOrderByIdUsecase, EditOrderByIdUsecase, CancelOrderByIdUsecase, DeleteOrderByIdUsecase]

const categories = [CreateCategoryUsecase, GetCategoriesUsecase, GetCategoryByIdUsecase, DeleteCategoryByIdUsecase]

export default _.flatten<any>([users, products, orders, categories])
