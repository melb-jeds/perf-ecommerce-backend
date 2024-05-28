import { HttpException, HttpStatus } from '@nestjs/common'

export class CategoryNotFoundException extends HttpException {
	constructor() {
		super(`categories.category-not-found`, HttpStatus.NOT_FOUND)
	}
}
