import { IsInt, IsString } from "class-validator";
//also apply validation globally in main.ts
export class CreateCustomerDto {
    @IsString()
    name: string;
    @IsInt()
    age: number;
}