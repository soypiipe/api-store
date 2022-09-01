import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/products.dto';

@Injectable()
export class ProductsService {

    private products: Product[] = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
            brand: 'Brand 1'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
            brand: 'Brand 2'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
            brand: 'Brand 3'
        }
    ];
    private counterId = this.products.length;

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number): Product {

        const product = this.products.find(product => product.id == id);
        if(!product){
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        return product;
    }

    create(payload: CreateProductDto) {
        const newProduct = {
            id: (this.counterId++) + 1,
            ...payload
        }
        this.products.push(newProduct);

        return newProduct;
    }
    update(id: number, payload: UpdateProductDto) {
        const product = this.findOne(id);
        if(!product){
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        this.products = this.products.map(product => product.id == id ? {...product, ...payload} : product)

        return payload;
    }
    delete(id: number) {
        const product = this.findOne(id);
        if(!product){
            throw new NotFoundException(`Product with id ${id} not found`);
        }
        this.products = this.products.filter(product => product.id != id);

        return true;
    }
}
