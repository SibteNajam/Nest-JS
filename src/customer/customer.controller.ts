import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }
    @Get()
    @ApiOperation({ summary: 'Get all customers' })
    getAll() {
        return this.customerService.getAllCustomer();
    }

    @Post()
    @ApiOperation({ summary: 'Add a new customer' })
    addCustomer(@Body() createCustomer: CreateCustomerDto) {
        return this.customerService.addCustomer(createCustomer);
    }

}
