import { Controller } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { Loan } from '../model/loan.model';
import { LoanService } from '../service/loan.service';

@Controller()
export class LoanController {
  constructor(
    private readonly loanService: LoanService,
  ) {}

  @EventPattern('loan-approved-by-commercial-service', Transport.REDIS)
  public async assessRisk(@Payload() loan: Loan) {
    await this.loanService.checkRisk(loan);
  }
}
