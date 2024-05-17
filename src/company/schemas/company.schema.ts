import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  www?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
