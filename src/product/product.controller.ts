import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

//is there any issue in code at line 14 

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getProducts() {
        return this.productService.getAllProducts();
    }
    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(Number(id));
    }
}
