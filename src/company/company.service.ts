import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: Model<CompanyDocument>,
  ) {}

  async create(company: Company): Promise<Company> {
    return this.companyModel.create(company);
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<Company> {
    return this.companyModel.findOne({ _id: id }).exec();
  }

  async remove(id: string): Promise<Company> {
    const deleted = await this.companyModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleted;
  }
}
