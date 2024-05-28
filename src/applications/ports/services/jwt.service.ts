export interface JwtService {
	sign(body: object, privateKey: string): string
}
