

  export class Product {


   /* constructor (_id: string = '', name: string = '', cost: number = null, type: string = null) {
      this._id = _id;
      this.name = name;
      this.cost = cost;
      this.type = type; // must be a class predefined
    }*/


    private _id: string;
    private _name: string;
    private _cost: number;
    private _type: string;

    public constructor(productBuilder: ProductBuilder) {
      this._id = productBuilder.id;
      this._type = productBuilder.type;
      this._cost = productBuilder.cost;
      this._name = productBuilder.name;
    }

    public static newProduct(): ProductBuilder {
      return new ProductBuilder();
    }

    get id(): string {
      return this._id;
    }

    set id(id: string) {
      this.id = id;
    }

    get name(): string {
      return this._name;
    }

    set name(name: string) {
      this.name = name;
    }

    get cost(): number {
      return this._cost;
    }

    set cost(cost: number) {
      this.cost = cost;
    }

    get type(): string {
      return this._type;
    }

    set type(type: string) {
      this.type = type;
    }

/*
    public DOtoBO(product: Product) {
      this.id = product.id;
      this.name = product.name;
      this.cost = product.cost;
      this.type = product.type;
      return this;
    }*/

  }

  class ProductBuilder {
    private _id: string = null;
    private _name: string = null;
    private _cost: number = null;
    private _type: string = null;

    public constructor() { console.log('on cree 1'); }

    /** Call this method to create the new Product Object */
    public build(): Product {
      return new Product(this);
    }

    setId(id: string): ProductBuilder {
      this._id = id;
      return this;
    }

    get id(): string {
      return this._id;
    }

    setName(name: string): ProductBuilder {
      this._name = name;
      return this;
    }

    get name(): string {
      return this._name;
    }

    setCost(cost: number): ProductBuilder {
      this._cost = cost;
      return this;
    }

    get cost(): number {
      return this._cost;
    }

    setType(type: string): ProductBuilder {
      this._type = type;
      return this;
    }

    get type(): string {
      return this._type;
    }

  }
