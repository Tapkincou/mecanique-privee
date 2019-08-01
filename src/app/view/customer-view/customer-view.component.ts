import { Component, OnInit, OnDestroy, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Customer } from '../../business-object/customer';
import { Observable } from 'rxjs';
import { CustomerBusiness } from 'src/app/business/customer-business';
import { CustomerDO } from 'src/app/data-object/customerDO';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerEditorComponent } from 'src/app/customer-editor/customer-editor.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Constants } from '../../config/constants';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

// export interface DialogData { firstName: string; lastName: string; }

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('customerListData') customerListData: CdkDropList;
  name = 'app-customer-view';
  private customerBusiness: CustomerBusiness;
  private customers$: Observable<Array<Customer>>;
  private customerSubject: BehaviorSubject<Array<Customer>>;
  public customers: Array<Customer>;

  // @Input() allDropLists;
  // @Input() billMaker: Customer[]; // billMakerList
  @Input() billMakerList: CdkDropList; //////////////////////

/*
  @ViewChild('billMaker')
  public billMaker = [new Customer('1', 'testfisrtname', 'testlastname', null, null, null, null, null),
  new Customer('2', 'testfisrtname2', 'testlastname2', null, null, null, null, null)];
*/
  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.customerListData.connectedTo = this.billMakerList;
    console.log('ICIIIIII');
    console.log(this.billMakerList);
  }

  whoAmI() {
    console.log('👶 I am a child!!');

  }

  ngOnInit() {
   // console.log(this.customerListData.nativeElement);
    this.customerBusiness = new CustomerBusiness();
    this.customerSubject = new  BehaviorSubject<Array<Customer>>(this.customerBusiness.getCustomers());
    this.customers$ = this.customerSubject.asObservable();
    this.customerBusiness.updateCustomers();
    console.log('init ' + name);
    this.customers$.subscribe( (customers) => {
      this.customers = [new Customer('1', 'testfisrtname', 'testlastname', null, null, null, null, null),
      new Customer('2', 'testfisrtname2', 'testlastname2', null, null, null, null, null)]; //  customers;
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
      height: Constants.DIALOG_HEIGHT,
      width: Constants.DIALOG_WIDTH,
      panelClass: 'add-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.customerBusiness.createCustomers(this.customerBusiness.customerFOtoBO(result));
      console.log(result);
    });
  }

  public drop(event: CdkDragDrop<Customer[]>) {
    // console.log(event.container.data);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnDestroy() {
    console.log('On destroy');
    this.customers$.subscribe().unsubscribe();
  }


}

