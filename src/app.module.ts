import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { multerConfig } from "../multer.config"
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SmartwalletController } from './smartwallet/smartwallet.controller';
import { SmartwalletService } from './smartwallet/smartwallet.service';
import { SenduseropController } from './senduserop/senduserop.controller';
import { SenduseropService } from './senduserop/senduserop.service';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // O el tipo de base de datos que estés utilizando
      database: "./products.db", // Ruta a tu archivo de base de datos SQLite
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/uploads', 
      rootPath: join(process.cwd(), 'uploads'),
    }),
    MulterModule.register(multerConfig),
    UsersModule,
    ProductsModule,
    AuthModule,
  ],
  controllers: [AppController, SmartwalletController, SenduseropController],
  providers: [AppService, SmartwalletService, SenduseropService],
})
export class AppModule {}
