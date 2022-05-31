import { Module } from '@nestjs/common';
import { ProductService } from './service/product.service';
import { ProductController } from './controller/loan.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Product } from './model/loan.model';
import { PurchaseService } from './service/purchase.service';
import { Purchase } from './model/user.model';
import { BuyService } from './service/loan.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypegooseModule.forFeature([Product, Purchase]),
    ClientsModule.register([
      {
        name: 'REDISCLIENT',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379, 
        },
      },
    ]),
  ],
  providers: [ProductService, PurchaseService, BuyService],
  controllers: [ProductController],
})
export class LoanModule {}
