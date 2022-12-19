import { ObjectLiteral } from 'typeorm';

export interface IRepository<T> {
  create(data: Partial<T>): any;

  insertBulkData(data: Array<ObjectLiteral>): any;

  updateById(id: string, data: ObjectLiteral): any;

  deleteById(id: string): any;

  find(filter: ObjectLiteral): any;

  findById(id: string): any;
}
