import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async createProduct(createProductDto: CreateProductDto, file: Express.Multer.File): Promise<Product> {
    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.description = createProductDto.description;
    newProduct.price = createProductDto.price;
    newProduct.imageUrl = 'https://api.keywise.com.ar' + '/uploads/' + file.filename;
    newProduct.category = createProductDto.category;
    newProduct.seller = createProductDto.seller;
    newProduct.email = createProductDto.email;
console.log(newProduct)
    return await this.productRepository.save(newProduct);
  }
}
