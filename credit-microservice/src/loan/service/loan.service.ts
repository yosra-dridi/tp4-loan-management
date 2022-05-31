import { Inject, Injectable, MethodNotAllowedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from '../model/user.model';
import { Loan } from '../model/loan.model';

@Injectable()
export class LoanService {
  constructor(
    @Inject('REDISCLIENT') private readonly redisClient: ClientProxy,
  ) {}

  public async find(loanDetails: Loan): Promise<User> {
    const { client_id , amount, deadline} = loanDetails;
    const user : User = await mongooseModule.getById(client_id);
    this.redisClient.emit('loan-approved-by-credit-service', loanDetails);
    return user;
  }
}
