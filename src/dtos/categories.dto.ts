import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types'
import { Product } from './../entities/product.entity'

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    products: Product[];
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
