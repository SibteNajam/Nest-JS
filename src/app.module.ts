import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { NynameController } from './nyname/nyname.controller';

@Module({
  imports: [CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, NynameController],
  providers: [AppService, ProductService],
})
export class AppModule { }
