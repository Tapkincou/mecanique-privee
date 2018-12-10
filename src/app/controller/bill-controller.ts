import { Bill } from '../data-object/bill';
import { Product } from '../data-object/product';
import { ProductWithQuantity } from '../data-object/product-with-quantity';
import { Customer } from '../data-object/customer';
import { Database } from '../database';

export class BillController extends Database {

/**
   *
   */
  public selectAllBills() {


    return this.bouchonSelectAllBills();
    // TODO
  }

  /**
   *
   * @param id: id of the product.
   */
  public selectProductById(id: number) {
    return new Bill(this.bouchonSelectBillById(id));
    // TODO
  }

  private bouchonSelectAllBills() {
    return <Bill[]><any>[
      { id: 1, customer: this.bouchonCustomer(), products: this.bouchonProductWithQuantity()}, ];
  }

  private bouchonSelectBillById(id: number) {
    return <Bill><any>{ id: 1, name: 'article1', cost: 10, type: 'type1' };
  }

    private bouchonCustomer() {
      return <Customer><any>{ id: 4, firstName: 'alexis', lastName: 'barro', city: 'Montpellier',
      address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040' };
    }

    private bouchonProductWithQuantity() {
        return <ProductWithQuantity[]><any>[
                { product: {id: 111, name: 'pipe d\'admission', cost: 140, type: 'piece moteur'}, quantity: 3 },
                { product: {id: 112, name: 'pose', cost: 230, type: 'main d\'oeuvre' }, quantity: 1 },
                { product: {id: 113, name: 'pneus', cost: 400, type: 'main d\'oeuvre' }, quantity: 4 }
    ];
    }

}
