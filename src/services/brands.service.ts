import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from './../entities/brand.entity'
import { CreateBrandDto, UpdateBrandDto } from './../dtos/brands.dto'

@Injectable()
export class BrandsService {
    private brands: Brand[] = [
        {
            id: 1,
            name: 'Brand 1',
            contact: 'Contact 1'
        },
        {
            id: 2,
            name: 'Brand 2',
            contact: 'Contact 2'
        },
        {
            id: 3,
            name: 'Brand 3',
            contact: 'Contact 3'
        }
    ];

    findAll(): Brand[] {
        return this.brands;
    }

    findOne(id: number): Brand {
        const brand = this.brands.find(brand => brand.id == id);
        if(!brand){
            throw new NotFoundException(`Brand with id ${id} not found`);
        }

        return brand;
    }

    create(payload: CreateBrandDto) {
        const newBrand = {
            id: (this.brands.length + 1),
            ...payload
        }
        this.brands.push(newBrand);

        return newBrand;
    }

    update(id: number, payload: UpdateBrandDto) {
        const brand = this.findOne(id);
        if(!brand){
            throw new NotFoundException(`Brand with id ${id} not found`);
        }
        this.brands = this.brands.map(brand => brand.id == id ? {...brand, ...payload} : brand)

        return payload;
    }

    delete(id: number) {
        const brand = this.findOne(id);
        if(!brand){
            throw new NotFoundException(`Brand with id ${id} not found`);
        }
        this.brands = this.brands.filter(brand => brand.id != id)

        return true;
    }
}

