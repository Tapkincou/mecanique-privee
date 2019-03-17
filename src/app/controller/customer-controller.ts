import { Customer } from '../business-object/customer';
import { Database } from '../database';
import { from } from 'rxjs';

export class CustomerController extends Database {

  /**
   *
   */
  public selectAllCustomers() {
    return from(this.getAllDocuments());
    // TODO
  }

  /**
   *
   * @param id: id of the product.
   */
  public selectCustomerById(id: number) {
    return this.bouchonSelectCustomerById();
    // TODO
  }

  private bouchonSelectAllCustomers() {
    return <Customer[]><any>[
      { id: 1, firstName: 'pierre', lastName: 'dalain', city: 'Rouen',
        address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040' },
      { id: 2, firstName: 'paul', lastName: 'potte', city: 'Lyon',
        address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040'  },
      { id: 3, firstName: 'jacques', lastName: 'ichanne', city: 'Saint-jacques-sur-esturgeon',
        address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040' },
      { id: 4, firstName: 'alexis', lastName: 'barro', city: 'Montpellier',
        address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040' }];
  }

  private bouchonSelectCustomerById() {
    return <Customer><any>{ _id: 4, fisrtName: 'alexis', lastName: 'barro', city: 'Montpellier',
    address: 'Rouen', postal: 'Rouen', phoneNumber: '0640404040' };
  }

}
