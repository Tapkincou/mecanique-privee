import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Customer } from '../../business-object/customer';
import { Observable } from 'rxjs';
import { CustomerBusiness } from 'src/app/business/customer-business';
import { CustomerDO } from 'src/app/data-object/customerDO';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  name = 'app-customer-view';
  private customerBusiness: CustomerBusiness;
  private customers$: Observable<Array<Customer>>;
  private customerSubject: BehaviorSubject<Array<Customer>>;

  public customers: Array<Customer>; // Array<Customer>;
  constructor() {
    this.customerBusiness = new CustomerBusiness();
    this.customerSubject = new  BehaviorSubject<Array<Customer>>(this.customerBusiness.getCustomers());
  }

  ngOnInit() {
    this.customers$ = this.customerSubject.asObservable();
    this.customerBusiness.updateCustomers();
    console.log('init ' + name);
    this.customers$.subscribe( (customers) => {
      this.customers = customers;
      console.log('customers::');
      console.log(customers);

    });



  }

}

