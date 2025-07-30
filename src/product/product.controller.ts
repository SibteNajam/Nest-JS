import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('product')
@ApiBearerAuth('access-token') // Use the same name as in main.ts
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @UseGuards(AuthGuard)
    @Get()
    getProducts() {
        return this.productService.getAllProducts();
    }
    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(Number(id));
    }
}
