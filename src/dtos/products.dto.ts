import {IsNumber, IsString, IsUrl, IsNotEmpty, IsEmpty, IsPositive} from 'class-validator'

import {PartialType} from '@nestjs/mapped-types'

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly brand: string;

    @IsNumber()
    @IsEmpty()
    readonly stock?: number;

    readonly image?: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
