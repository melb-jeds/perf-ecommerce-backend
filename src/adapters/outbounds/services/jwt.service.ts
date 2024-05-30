import { JwtService as IJwtService } from '@applications/ports/services/jwt.service'
import { sign as jwtSign } from 'jsonwebtoken'

export class JwtService implements IJwtService {
	sign(body: object, privateKey: string): string {
		return jwtSign(body, privateKey)
	}
}
