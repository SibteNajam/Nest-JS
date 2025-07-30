// src/dto/name.dto.ts

import { IsString } from "class-validator";


export class NameDto {
    @IsString()
    name: string;
}
