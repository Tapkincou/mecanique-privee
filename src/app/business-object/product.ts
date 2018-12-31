export class Product {


  constructor (product: Product) {
    this._id = product._id;
    this.name = product.name;
    this.cost = product.cost;
    this.type = product.type;
  }

  private _id: number;
  private name: string;
  private cost: number;
  private type: string;
}
