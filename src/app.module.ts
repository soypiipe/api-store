import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { OrdersService } from './services/orders.service';
import { CutomersService } from './services/cutomers.service';
import { UsersService } from './services/users.service';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UsersController, CustomersController, BrandsController],
  providers: [AppService, ProductsService, BrandsService, OrdersService, CutomersService, UsersService, CategoriesService],
})
export class AppModule {}
