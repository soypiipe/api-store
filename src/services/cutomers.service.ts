import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from './../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './../dtos/customers.dto';

@Injectable()
export class CutomersService {

    private customers: Customer[] = [
        {
            id: 1,
            name: 'Customer 1',
            contact: 'Contact 1'
        },
        {
            id: 2,
            name: 'Customer 2',
            contact: 'Contact 2'
        },
        {
            id: 3,
            name: 'Customer 3',
            contact: 'Contact 3'
        }
    ]

    findAll() {
        return this.customers.length > 0 ? this.customers : [];
    }

    findOne(id: number) {
        const customer = this.customers.find(customer => customer.id == id);
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        return customer;
    }

    create(payload: CreateCustomerDto) {
        const newCustomer = {
            id: (this.customers.length + 1),
            ...payload
        }
        this.customers.push(newCustomer);

        return newCustomer;
    }

    update(id: number, payload: UpdateCustomerDto) {
        const customer = this.findOne(id);
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        this.customers = this.customers.map(customer => customer.id == id ? { ...customer, ...payload } : customer)

        return payload;
    }

    delete(id: number) {
        const customer = this.findOne(id);
        if (!customer) {
            throw new NotFoundException(`Customer with id ${id} not found`);
        }
        this.customers = this.customers.filter(customer => customer.id != id)

        return {
            message: `Customer with id ${id} deleted`,
        };
    }

}
