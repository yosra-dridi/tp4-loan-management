import { Controller } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { Loan } from '../model/loan.model';
import { User } from '../model/user.model';
import { LoanService } from '../service/loan.service';

@Controller()
export class LoanController {
  constructor(
    private readonly loanService: LoanService,
  ) {}

  @MessagePattern({ cmd: 'loan' })
  public async applyForLoan(
    loanDetails: Loan,
  ): Promise<User> {
    const user: User = await this.loanService.find(loanDetails);
    return user;
  }
}
