import { Injectable } from '@nestjs/common';
import type { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];


    getAllCustomer(): Customer[] {
        return this.customers;
    }

    addCustomer(createCustomer: CreateCustomerDto): Customer {
        const newCustomer = {
            name: createCustomer.name,
            age: createCustomer.age,
            id: Date.now(), // Using timestamp as a simple unique ID
        }
        this.customers.push(newCustomer);
        return newCustomer;
    }

}
