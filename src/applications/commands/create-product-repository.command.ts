export interface CreateProductRepositoryCommand {
	name: string
	description: string
	price: number
	stock: number
	currency: string
	images: string[]
	sellerId: string
	categoryIds: string[]
}
