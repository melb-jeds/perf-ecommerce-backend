import { EnvService as IEnvService } from '@applications/ports/services/env.service'

export class EnvService implements IEnvService {
	public getHashSalt(): number {
		const salt = process.env.HASH_SALT
		if (!salt) throw new Error('env HASH_SALT not found')

		return parseInt(salt)
	}

	public getJwtPrivateKey(): string {
		const key = process.env.JWT_PRIVATE_KEY
		if (!key) throw new Error('env JWT_PRIVATE_KEY not found')

		return key
	}
}
