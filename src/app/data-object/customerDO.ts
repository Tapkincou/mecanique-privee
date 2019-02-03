import { Customer } from '../business-object/customer';

export class CustomerDO {

  public doc: Customer;
  public id: string;

  constructor(dataObject: {
    doc: {
      firstName: string,
      lastName: string
    },
    id: string,
    rev: string
  }) {
    this.doc.setFirstName(dataObject.doc.firstName);
    this.doc.setLastName(dataObject.doc.lastName);

  }

/*
  public get_id() {
    return this.id;
  }

  public set_id(_id: string) {
    this._id = _id;
  }

  public getDoc(): Customer  {
    return this.doc !== undefined ? this.doc : new Customer();
  }

  public setDoc(doc: Customer) {
    this.doc = new Customer(doc);
  }
*/

}
