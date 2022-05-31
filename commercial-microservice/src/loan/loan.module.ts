import { Module } from '@nestjs/common';
import { LoanController } from './controller/loan.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Loan } from './model/loan.model';
import { LoanService } from './service/loan.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypegooseModule.forFeature([Loan]),
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
  providers: [LoanService],
  controllers: [LoanController],
})
export class LoanModule {}
