export interface Repository<T> {
	create(command: Partial<T>): Promise<T>
	findById(id: string): Promise<T | null>
	updateById(id: string, command: Partial<T>): Promise<void>
	deleteById(id: string): Promise<void>
}
