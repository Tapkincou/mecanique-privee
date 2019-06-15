import { EmailValidator } from "@angular/forms";

export class Customer {

  private _id: string;
  private firstName: string;
  private lastName: string;
  private city: string;
  private address: string;
  private postal: number;
  private phoneNumber: string;
  private email: EmailValidator;

  constructor(_id: string = '', firstName: string = '', lastName: string = '', city: string = ''
  , address: string = '', postal: number = null, phoneNumber: string = '', email: EmailValidator = null) {

    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.address = address;
    this.postal = postal;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  public DOtoBO(customer: Customer) {
    this._id = customer._id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.city = customer.city;
    this.address = customer.address;
    this.postal = customer.postal;
    this.phoneNumber = customer.phoneNumber;
    this.email = customer.email;
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

  public getLastName() {
    return this.lastName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }

  public getAddress() {
    return this.address;
  }

  public setAddress(address: string) {
    this.address = address;
  }

  public getPhoneNumber() {
    return this.phoneNumber;
  }

  public setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  public getPostal() {
    return this.postal;
  }

  public setPostal(postal: number) {
    this.postal = postal;
  }

  public getCity() {
    return this.city;
  }

  public setCity(city: string) {
    this.city = city;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: EmailValidator) {
    this.email = email;
  }
}
