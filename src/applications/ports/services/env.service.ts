export interface EnvService {
	getHashSalt(): string
	getJwtPrivateKey(): string
}
