export class Customer {

  private id: number;
  private fisrtName: string;
  private lastName: string;
  private city: string;
  private address: string;
  private postal: string;
  private phoneNumber: string;

  constructor(customer: Customer) {
    this.id = customer.id;
    this.fisrtName = customer.fisrtName;
    this.lastName = customer.lastName;
    this.city = customer.city;
    this.address = customer.address;
    this.postal = customer.postal;
    this.phoneNumber = customer.phoneNumber;
  }

}
