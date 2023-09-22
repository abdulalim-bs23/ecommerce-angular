export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export class Product {
  constructor(
    public id: number,
    public name: string,
    public image: string,
    public category: number
  ) {}
}
