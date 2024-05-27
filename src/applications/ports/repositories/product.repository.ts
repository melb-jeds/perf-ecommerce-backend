import Product from '@applications/domains/models/product.model'
import { Repository } from '@applications/ports/repositories/repository'

export interface ProductRepository extends Repository<Product> {}
