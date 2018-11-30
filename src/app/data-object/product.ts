export class Product {


  constructor (product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.cost = product.cost;
    this.type = product.type;
  }

  private id: number;
  private name: string;
  private cost: number;
  private type: string;
}
