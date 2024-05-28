export interface HashService {
	hash(raw: string, salt: number | string): string
	compare(raw: string, hash: string): boolean
}
