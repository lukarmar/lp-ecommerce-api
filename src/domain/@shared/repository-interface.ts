
export default interface RepositoryInterface<T> {
  create(entity: T): Promise<T>
  update(id: number, dataUpdate: T): Promise<T>;
  findById(id: number): Promise<T | undefined>
  findAll(): Promise<T[]>;
}