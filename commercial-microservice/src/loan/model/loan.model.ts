import { prop } from '@typegoose/typegoose';

export class Loan {
  _id: string;

  @prop({ required: true, type: String })
  public clientId: string;

  @prop({ required: true, type: Number })
  public loanAmount: number;
}
