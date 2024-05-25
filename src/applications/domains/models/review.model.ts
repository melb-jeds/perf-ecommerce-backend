import User from '@applications/domains/models/user.model'

export default class Review {
	rating: number
	comment: string
	createdAt: Date
	updatedAt: Date
	author: User
}
