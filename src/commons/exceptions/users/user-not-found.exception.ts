import { HttpException, HttpStatus } from '@nestjs/common'

export class UserNotFoundException extends HttpException {
	constructor() {
		super('users.user-not-found', HttpStatus.UNPROCESSABLE_ENTITY)
	}
}
