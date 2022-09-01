import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return 'Hola Mundo'
    }

    @Get('nuevo')
    newEndpoint(): string {
        return 'yo soy  nuevo endpoint';
    }
    @Get('/nuevo2/')
    heelo(): string {
        return 'Endpoint nuevo2';
    }


    //Recibir parametros por url usando el objeto param
    //   @Get('product/:id')
    //   getProduct(@Param() params: any): string {
    //     return `Producto con id ${params.id}`;
    //   }

}
