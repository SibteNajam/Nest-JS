import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Category')
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }
    @Get()
    @ApiOperation({ summary: 'Get all categories' })

    getAll() {
        return this.categoryService.getCategories();
    }
}