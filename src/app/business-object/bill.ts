import { Customer } from './customer';
import { ProductWithQuantity } from './product-with-quantity';

export class Bill {
  constructor (bill: Bill) {
    this._id = bill._id;

  }

  private _id: number;

  private customer: Customer;

  private products: ProductWithQuantity[];

}

