import { HttpException, HttpStatus } from '@nestjs/common'

export class ProductReviewNotFoundException extends HttpException {
	constructor() {
		super('products.product-review-not-found', HttpStatus.NOT_FOUND)
	}
}
