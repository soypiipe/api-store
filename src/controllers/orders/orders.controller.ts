import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
    @Get()
    getAll(): any {
        return {
            message: 'All orders'
        };
    }

    @Get(':id')
    getOrder(@Param('id') id: string): string {
        return `Order id ${id}`;
    }

    @Post()
    createOrder(@Body() payload: any): any {
        return {
            message: 'Order created',
            payload
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any): any {
        return {
            message: `Order with id ${id} updated`,
            payload
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number): any {
        return {
            message: `Order with id ${id} deleted`,
        };
    }
}
