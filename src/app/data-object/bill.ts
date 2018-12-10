import { Product } from './product';
import { Customer } from './customer';
import { ProductWithQuantity } from './product-with-quantity';

export class Bill {
  constructor (bill: Bill) {
    this.id = bill.id;

  }

  private id: number;

  private customer: Customer;

  private products: ProductWithQuantity[];

}

