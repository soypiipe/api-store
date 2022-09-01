import { Injectable, NotFoundException } from '@nestjs/common';
import {Order} from './../entities/order.entity';
import {CreateOrderDto, UpdateOrderDto} from './../dtos/orders.dto';


@Injectable()
export class OrdersService {
    private orders: Order[] = [
        {
            id: 1,
            customerId: 1,
            products: [
                {
                    id: 1,
                    name: 'Product 1',
                    price: 100,
                    brand: 'Brand 1'
                }
            ],
            total: 100,
        },
        {
            id: 2,
            customerId: 2,
            products: [
                {
                    id: 2,
                    name: 'Product 2',
                    price: 200,
                    brand: 'Brand 2'
                }
            ],
            total: 200,
        }
    ]


    getAll(): Order[] {
        return this.orders.length > 0 ? this.orders : [];
    }

    getOne(id: number): Order {
        const order = this.orders.find(order => order.id == id);
        if (!order) {
            throw new NotFoundException(`Order with id ${id} not found`);
        }
        return order;
    }

    create(payload: CreateOrderDto): Order {
        const newOrder = {
            id: (this.orders.length + 1),
            ...payload
        }
        this.orders.push(newOrder);

        return newOrder;
    }

    update(id: number, payload: UpdateOrderDto) {
        const order = this.getOne(id);
        if (!order) {
            throw new NotFoundException(`Order with id ${id} not found`);
        }
        this.orders = this.orders.map(order => order.id == id ? { ...order, ...payload } : order)

        return payload;
    }

    delete(id: number) {
        const order = this.getOne(id);
        if (!order) {
            throw new NotFoundException(`Order with id ${id} not found`);
        }
        this.orders = this.orders.filter(order => order.id != id)

        return order;
    }


}
