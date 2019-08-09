import { Product } from './product';

export class ProductWithQuantity {


    constructor (product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity;
    }
    private product: Product;
    private quantity: number;

  }
