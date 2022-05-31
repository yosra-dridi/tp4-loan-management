import { prop } from '@typegoose/typegoose';
import { Loan } from './loan.model';

export class User {
  _id: string;

  @prop({ required: true, type: String })
  public user_id: string;

  @prop({ required: true, type: Number })
  public salary: number;

  @prop({ required: true, type: Number })
  public otherLoans: Loan;
}
