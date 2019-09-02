import { EmailValidator } from '@angular/forms';

export class Customer {

  private _id: string;
  private _firstName: string;
  private _lastName: string;
  private _city: string;
  private _address: string;
  private _postal: number;
  private _phoneNumber: string;
  private _email: EmailValidator;
/*
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
  }*/

  public constructor(customerBuilder: CustomerBuilder) {
    this._id = customerBuilder.id;
    this._firstName = customerBuilder.firstName;
    this._lastName = customerBuilder.lastName;
    this._city = customerBuilder.city;
  }

  public static newCustomer(): CustomerBuilder {
    return new CustomerBuilder();
  }

  // peut-etre va falloir cree une classe dediee CustomerDO ?
  public static DOtoBO(customer: Customer): Customer {
    return this.newCustomer().setId(customer.id)
                      .setFirstName(customer.firstName)
                      .setLastName(customer.lastName)
                      .setCity(customer.city)
                      .build();
  /*  this._id = customer._id;
    this._firstName = customer._firstName;
    this._lastName = customer._lastName;
    this._city = customer._city;
    this._address = customer._address;
    this._postal = customer._postal;
    this._phoneNumber = customer._phoneNumber;
    this._email = customer._email;
    return this;*/
  }

  get id(): string {
    return this._id;
  }

  set id (id: string) {
    this._id = id;
  }

  public get firstName() {
    return this._firstName;
  }
  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get lastName() {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get address() {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }

  public get phoneNumber() {
    return this._phoneNumber;
  }

  public set phoneNumber(phoneNumber: string) {
    this._phoneNumber = phoneNumber;
  }

  public get postal() {
    return this._postal;
  }

  public set postal(postal: number) {
    this._postal = postal;
  }

  public get city() {
    return this._city;
  }

  public set city(city: string) {
    this._city = city;
  }

  public get email() {
    return this._email;
  }

  public set email(email: EmailValidator) {
    this._email = email;
  }
}

class CustomerBuilder {
  private _id: string = null;
  private _firstName: string = null;
  private _lastName: string = null;
  private _city: string = null;

  public constructor() { console.log('on cree 1'); }

  /** Call this method to create the new Product Object */
  public build(): Customer {
    return new Customer(this);
  }

  setId(id: string): CustomerBuilder {
    this._id = id;
    return this;
  }

  get id(): string {
    return this._id;
  }

  setFirstName(firstName: string): CustomerBuilder {
    this._firstName = firstName;
    return this;
  }

  get firstName(): string {
    return this._firstName;
  }

  setLastName(lastName: string): CustomerBuilder {
    this._lastName = lastName;
    return this;
  }

  get lastName(): string {
    return this._lastName;
  }

  setCity(city: string): CustomerBuilder {
    this._city = city;
    return this;
  }

  get city(): string {
    return this._city;
  }

}
