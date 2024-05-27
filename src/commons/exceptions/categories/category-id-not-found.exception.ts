import { HttpException, HttpStatus } from '@nestjs/common'

export class CategoryIdNotFoundException extends HttpException {
	constructor(id: string) {
		super(`categories.id-not-found.${id}`, HttpStatus.NOT_FOUND)
	}
}
