import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { LoanModule } from './loan/loan.module';
import { MongooseModule } from '@nestjs/mongoose

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypegooseModule.forRoot(`${process.env.DATABASE_URL}`),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    LoanModule,
  ],
})
export class AppModule {}
