import { Injectable } from '@nestjs/common';
import { EntityManager, Repository, SelectQueryBuilder } from 'typeorm';
import { IRepository } from '../interface';
import { BaseEntity } from './base.entity';

@Injectable()
export abstract class BaseRepository<T extends BaseEntity>
  implements IRepository<T>
{
  public model: new () => T;
  protected entity: EntityManager;
  public queryBuilder: SelectQueryBuilder<T>;

  protected item_per_page = 10;
  protected primaryKey = '_id';
  protected repository: Repository<T>;

  constructor(model: new () => T, entity: EntityManager) {
    this.model = model;
    this.entity = entity;
    this.repository = entity.getRepository(model);
  }

  public repo(): Repository<T> {
    return this.entity.getRepository(this.model);
  }

  public async insertBulkData(data: T[]) {
    try {
      const bulkInsert = await this.repository.insert(data as any);
      return bulkInsert;
    } catch (error) {
      throw error;
    }
  }

  async updateById(id: string, data: Partial<T>): Promise<Partial<T>> {
    const updatePayload: Partial<T> = data;
    const queryBuilder = this.repository.createQueryBuilder();
    for (const keys of Object.keys(data)) {
      if (updatePayload[keys] == null || updatePayload[keys] == undefined) {
        delete updatePayload[keys];
      }
    }

    const result = await queryBuilder
      .update()
      .set(updatePayload as any)
      .where({ _id: id })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  async deleteById(id: string) {
    const queryBuilder = this.repository.createQueryBuilder();
    const result = await queryBuilder.delete().where({ _id: id }).execute();
    return result.affected;
  }

  async findById(id: string): Promise<T> {
    const queryBuilder = this.repository.createQueryBuilder();
    const getSingle = await queryBuilder.select().where({ _id: id }).getOne();
    return { ...getSingle };
  }

  async find(filter) {
    const queryBuilder = this.repository.createQueryBuilder();

    return await (await queryBuilder.select().where(filter).getMany()).flat();
  }

  async create(data: Partial<T>): Promise<any> {
    try {
      const newEntity = this.repository.create(data as any);

      return await this.repository.save(newEntity);
    } catch (error) {
      throw error;
    }
  }
}
