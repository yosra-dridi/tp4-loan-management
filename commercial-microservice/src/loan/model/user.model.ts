import { prop } from '@typegoose/typegoose';

export class User {
  _id: string;

  @prop({ required: true, type: String })
  public clientId: string;

  @prop({ required: true, type: Number })
  public age: number;

  @prop({ required: true, type: Number })
  public salary: number;
}
