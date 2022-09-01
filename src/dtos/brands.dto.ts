import {IsNotEmpty, IsString} from 'class-validator'
import { PartialType } from '@nestjs/mapped-types'

export class CreateBrandDto{

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    readonly contact: string;
}

//utiliza los mismo campos que CreateBrand, pero opcionales
export class UpdateBrandDto extends PartialType(CreateBrandDto){}
