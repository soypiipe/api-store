import {IsNotEmpty, IsNumber } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

import { Product } from './../entities/product.entity';

export class CreateOrderDto{
    @IsNumber()
    customerId: number;

    @IsNotEmpty()
    products: Product[];

    @IsNumber()
    total: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
