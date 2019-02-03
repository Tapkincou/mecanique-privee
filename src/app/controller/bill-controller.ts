import { Bill } from '../business-object/bill';
import { Product } from '../business-object/product';
import { ProductWithQuantity } from '../business-object/product-with-quantity';
import { Customer } from '../business-object/customer';
import { Database } from '../database';
import { BillDO } from '../data-object/billDO';
import { BillsDO } from '../data-object/billsDO';

export class BillController extends Database {




/**
   *
   */
  public selectAllBills(): Promise<any> {
    console.log('dans le contrller ::');
    return <Promise<any>>this.getAllDocuments();
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
      { _id: 1, customer: this.bouchonCustomer(), products: this.bouchonProductWithQuantity()}, ];
  }

  private bouchonSelectBillById(id: number) {
    return <Bill><any>{ _id: 1, name: 'article1', cost: 10, type: 'type1' };
  }

    private bouchonCustomer() {
      return <Customer><any>{ _id: 4, firstName: 'alexis', lastName: 'barro', city: 'Montpellier',
      address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040' };
    }

    private bouchonProductWithQuantity() {
        return <ProductWithQuantity[]><any>[
                { product: {_id: 111, name: 'pipe d\'admission', cost: 140, type: 'piece moteur'}, quantity: 3 },
                { product: {_id: 112, name: 'pose', cost: 230, type: 'main d\'oeuvre' }, quantity: 1 },
                { product: {_id: 113, name: 'pneus', cost: 400, type: 'main d\'oeuvre' }, quantity: 4 }
      ];
    }

}
