import { prop } from '@typegoose/typegoose';

export class Loan {
  _id: string;

  @prop({ required: true, type: String })
  public clientId: string;

  @prop({ required: true, type: Number })
  public amount: number;

  @prop({ required: true, type: Number })
  public deadline: number;
}
