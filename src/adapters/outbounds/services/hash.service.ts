import { HashService as IHashService } from '@applications/ports/services/hash.service'
import { compareSync, hashSync } from 'bcrypt'

export class HashService implements IHashService {
	public hash(raw: string, salt: number): string {
		return hashSync(raw, salt)
	}

	public compare(raw: string, hash: string): boolean {
		return compareSync(raw, hash)
	}
}
