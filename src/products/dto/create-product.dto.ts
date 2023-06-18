import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string;
  
    @ApiProperty()
    description: string;
  
    @ApiProperty()
    price: number;

    @ApiProperty()
    imageUrl: string;

    @ApiProperty()
    category: string;

    @ApiProperty()
    seller: string;

    @ApiProperty()
    email: string;
  }