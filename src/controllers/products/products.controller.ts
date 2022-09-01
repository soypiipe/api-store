import { Body, Controller, Delete, Get, Param, Post, Put, Query, HttpStatus, HttpCode} from '@nestjs/common';

import { ParseIntPipe } from './../../common/parse-int.pipe';

import { ProductsService } from './../../services/products.service';

import { CreateProductDto, UpdateProductDto } from './../../dtos/products.dto';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @Get()
    getProducts(
        @Query('limit') limit: number = 100,
        @Query('offset') offset: number = 0,
        @Query('brand') brand: string
    ) {
        return this.productsService.findAll();
    }

    @Get('filter')
    getProductFilter() {
        return {
            message: `Yo soy un filtro de productos`
        };
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    createProduct(@Body() payload: CreateProductDto) {
        return this.productsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
        return this.productsService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }
}
