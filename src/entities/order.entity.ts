import { Product } from './product.entity'

export class Order {
    id: number;
    customerId: number;
    products: Product[];
    total: number;
}
