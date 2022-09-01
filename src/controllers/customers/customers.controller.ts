import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put,
    ParseIntPipe } from '@nestjs/common';

import {Customer} from './../../entities/customer.entity';
import {CreateCustomerDto, UpdateCustomerDto} from './../../dtos/customers.dto';

import { CutomersService } from './../../services/cutomers.service';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CutomersService) { }

    @Get()
    findAll(): Customer[] {
        return this.customersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Customer {
        return this.customersService.findOne(id);
    }

    @Post()
    createCustomer(@Body() payload: CreateCustomerDto) {
        return this.customersService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDto) {
        return this.customersService.update(id, payload);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.customersService.delete(id);
    }
}
