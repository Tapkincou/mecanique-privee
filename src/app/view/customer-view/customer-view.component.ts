import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Customer } from '../../business-object/customer';
import { Observable } from 'rxjs';
import { CustomerBusiness } from 'src/app/business/customer-business';
import { CustomerDO } from 'src/app/data-object/customerDO';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerEditorComponent } from 'src/app/customer-editor/customer-editor.component';
import { FormGroup, FormControl } from '@angular/forms';

// export interface DialogData { firstName: string; lastName: string; }

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit, OnDestroy {

  name = 'app-customer-view';
  private customerBusiness: CustomerBusiness;
  private customers$: Observable<Array<Customer>>;
  private customerSubject: BehaviorSubject<Array<Customer>>;
  public customers: Array<Customer>;
  private firstName: string;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.customerBusiness = new CustomerBusiness();
    this.customerSubject = new  BehaviorSubject<Array<Customer>>(this.customerBusiness.getCustomers());
    this.customers$ = this.customerSubject.asObservable();
    this.customerBusiness.updateCustomers();
    console.log('init ' + name);
    this.customers$.subscribe( (customers) => {
      this.customers = customers;
      console.log('customers::');
      console.log(customers);

    });

  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

   const dialogRef = this.dialog.open(CustomerEditorComponent, {
     // data: { fistName: this.firstName},
      height: '400px',
      width: '600px',
      panelClass: 'add-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  ngOnDestroy() {
    console.log('On destroy');
    this.customers$.subscribe().unsubscribe();
  }


}

