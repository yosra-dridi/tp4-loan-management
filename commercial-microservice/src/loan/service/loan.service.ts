import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Loan } from '../model/loan.model';
import { User } from '../model/user.model';

@Injectable()
export class LoanService {
  constructor(
    @Inject('REDISCLIENT') private readonly redisClient: ClientProxy,
  ) {}

  public async find(loanDetails: Loan): Promise<User> {
    const { client_id , amount} = loanDetails;
    const user : User = await mongooseModule.getById(client_id);
    if (user.salary > amount && user.age < 60) {
      this.redisClient.emit('loan-approved-by-commercial-service', loanDetails);
    }
    return user;
  }
}
