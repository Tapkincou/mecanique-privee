export class Product {


  constructor (product: Product = new Product()) {
    this._id = product._id;
    this.name = product.name;
    this.cost = product.cost;
    this.type = product.type;
  }

  private _id: string;
  private name: string;
  private cost: number;
  private type: string;


  public get_id() {
    return this._id;
  }

  public set_id(_id: string) {
    this._id = _id;
  }

  public getName() {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getCost() {
    return this.cost;
  }

  public setCost(cost: number) {
    this.cost = cost;
  }

  public getType() {
    return this.type;
  }

  public setType(type: string) {
    this.type = type;
  }





}

