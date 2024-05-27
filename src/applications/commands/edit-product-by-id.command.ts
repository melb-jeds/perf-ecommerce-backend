export interface EditProductByIdCommand {
	id: string
	name: string
	description: string
	price: number
	stock: number
	currency: string
	images: string[]
	categoryIds: string[]
}
