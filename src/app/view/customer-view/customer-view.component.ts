import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Customer } from 'src/app/data-object/customer';
import { Observable } from 'rxjs';
import { CustomerBusiness } from 'src/app/business/customer-business';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  name = 'app-customer-view';
  private customerBusiness = new CustomerBusiness();
  private customers$: Observable<Customer[]>;
  private customerSubject: BehaviorSubject<Customer[]> = new  BehaviorSubject<Customer[]>(this.customerBusiness.getCustomers());

  public customers: Array<Customer>;
  constructor() {
    this.customers$ = this.customerSubject.asObservable();
  }

  ngOnInit() {
    console.log('init ' + name);
    this.customers$.subscribe( customers => this.customers = customers);
  }

}

