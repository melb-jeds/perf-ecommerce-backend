import { HttpException, HttpStatus } from '@nestjs/common'

export class ProductNotFoundException extends HttpException {
	constructor() {
		super('products.product-not-found', HttpStatus.UNPROCESSABLE_ENTITY)
	}
}
