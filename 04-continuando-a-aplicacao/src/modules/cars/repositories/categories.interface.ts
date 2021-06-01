import Category from '../entites/category.model';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export default interface ICategoriesRepository {
  findByName(name: string): Promise<boolean>;
  list(): Promise<Category[]>;
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
}
