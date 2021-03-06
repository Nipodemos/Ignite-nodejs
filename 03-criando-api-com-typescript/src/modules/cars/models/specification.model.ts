import { v4 as uuidV4 } from 'uuid';

export default class Specification {
  id?: string;

  name: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  constructor({ id, name, description, createdAt, updatedAt }: Specification) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
