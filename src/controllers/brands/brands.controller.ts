import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { Brand } from './../../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './../../dtos/brands.dto';

import { BrandsService } from './../../services/brands.service';

@Controller('brands')
export class BrandsController {

    constructor(private brandsService: BrandsService){}

    @Get()
    findAll(): Brand[] {
        return this.brandsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateBrandDto) {
        return this.brandsService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateBrandDto) {
        return this.brandsService.update(id, payload);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.brandsService.delete(id);
    }
}
