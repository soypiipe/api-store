import {IsString, IsNotEmpty} from 'class-validator'

import {PartialType} from '@nestjs/mapped-types'

export class CreateCustomerDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly contact: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
