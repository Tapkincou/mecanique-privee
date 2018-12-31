export class Customer {

  private _id: number;
  private fisrtName: string;
  private lastName: string;
  private city: string;
  private address: string;
  private postal: string;
  private phoneNumber: string;

  constructor(customer: Customer) {
    this._id = customer._id;
    this.fisrtName = customer.fisrtName;
    this.lastName = customer.lastName;
    this.city = customer.city;
    this.address = customer.address;
    this.postal = customer.postal;
    this.phoneNumber = customer.phoneNumber;
  }

}
