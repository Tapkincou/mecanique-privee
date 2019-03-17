export class Customer {

  private _id: string;
  private firstName: string;
  private fisrtName: string;
  private lastName: string;
  private city: string;
  private address: string;
  private postal: number;
  private phoneNumber: string;


  constructor(_id: string = '', firstName: string = '', lastName: string = '', city: string = ''
  , address: string = '', postal: number = null, phoneNumber: string = '') {

    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.address = address;
    this.postal = postal;
    this.phoneNumber = phoneNumber;
  }

  public DOtoBO(customer: Customer) {
    this._id = customer._id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.city = customer.city;
    this.address = customer.address;
    this.postal = customer.postal;
    this.phoneNumber = customer.phoneNumber;

    return this;
  }

  public get_id() {
    return this._id;
  }

  public set_id(_id: string) {
    this._id = _id;
  }

  public getFirstName() {
    return this.firstName;
  }
  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public getFisrtName() {
    return this.fisrtName;
  }
  public setFisrtName(fisrtName: string) {
    this.fisrtName = fisrtName;
  }
  public getLastName() {
    return this.lastName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }


}
