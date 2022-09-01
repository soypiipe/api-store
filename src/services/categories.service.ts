import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dto';

@Injectable()
export class CategoriesService {

        private categories: Category[] = [
            {
                id: 1,
                name: 'Category 1',
                description: 'Description 1',
                products: [
                    {
                        id: 1,
                        name: 'Product 1',
                        price: 100,
                        brand: 'Brand 1'
                    }
                ]
            },
            {
                id: 2,
                name: 'Category 2',
                description: 'Description 2',
                products: []
            },
            {
                id: 3,
                name: 'Category 3',
                description: 'Description 3',
                products: []
            }
        ];
        private counterId = this.categories.length;

        findAll(): Category[] {
            return this.categories;
        }

        findOne(id: number): Category {

            const category = this.categories.find(category => category.id == id);
            if(!category){
                throw new NotFoundException(`Category with id ${id} not found`);
            }
            return category;
        }

        create(payload: CreateCategoryDto) {
            const newCategory = {
                id: (this.counterId++) + 1,
                ...payload
            }
            this.categories.push(newCategory);

            return newCategory;
        }
        update(id: number, payload: UpdateCategoryDto) {
            const category = this.findOne(id);
            if(!category){
                throw new NotFoundException(`Category with id ${id} not found`);
            }
            this.categories = this.categories.map(category => category.id == id ? {...category, ...payload} : category)

            return payload;
        }
        delete(id: number) {
            const category = this.findOne(id);
            if (!category) {
                throw new NotFoundException(`Category with id ${id} not found`);
            }
            this.categories = this.categories.filter(category => category.id != id);
        }
}
