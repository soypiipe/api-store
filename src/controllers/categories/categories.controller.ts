import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { CategoriesService } from './../../services/categories.service';

import { Category } from './../../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from './../../dtos/categories.dto';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) { }

    @Get()
    findAll(): Category[]{
        return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Category {
        return this.categoriesService.findOne(id);
    }

    @Post()
    createCategory(@Body() payload: CreateCategoryDto) {
        return this.categoriesService.create(payload);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCategoryDto) {
        return this.categoriesService.update(id, payload);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): any {
        return this.categoriesService.delete(id);
    }
}
