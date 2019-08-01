import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BillBusiness } from 'src/app/business/bill-business';
import { Observable, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { Bill } from 'src/app/business-object/bill';
import { from } from 'rxjs';
import { BillDO } from 'src/app/data-object/billDO';
import { BillController } from 'src/app/controller/bill-controller';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Customer } from 'src/app/business-object/customer';
@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss']
})
export class BillViewComponent implements OnInit, OnDestroy {

  @Input() allDropLists;
  @Input() billMaker;
  public name = 'app-bill-view';

  private billController = new BillController('billdatabase');
  public billBusiness = new BillBusiness();
  private bills$: Observable<any>;
  public customers: Customer[];

 // private initDatabase$: Observable<Boolean>;   Bill[]

  // Send the current state of the subject when it changes.
 // private billsSubject: BehaviorSubject<Promise<BillDO[]>> = new BehaviorSubject<Promise<BillDO[]>>(this.billBusiness.getBills());
 // private initDatabaseSubject: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(this.billBusiness.InitDatabase());
  // private testSubject: BehaviorSubject<Promise<any>> = new BehaviorSubject<Promise<any>>((this.billBusiness.getBills()));
  // new BehaviorSubject<any>((this.billController.getAllDocuments()));

 public bills: any; // Array<Bill>;

 private test$: Observable<any>;

  constructor() {
    // this.billBusiness.initDatabase();
    // this.initDatabase$ = this.initDatabaseSubject.asObservable();
    // this.bills$ = this.billsSubject.asObservable();

   }



  ngOnInit() {
   // this.test$ = (from(this.billController.getAllDocuments())); //  this.test$ = (from(this.billController.getAllDocuments())); !!!!
    console.log('init ' + name);

    /* this.billBusiness.getBillsSubject.subscribe(
      (bills: Array<any>) => {
        console.log('coucoucoucou:::  ${bills}');
        console.log(bills);
        this.bills = bills;
        console.log(this.bills.length);
       bills.then(value => {
          console.log('views::: ${value}');
          console.log(value);
          this.bills = value;
        }).catch(error => { console.log('ca a merdé ${error}'); });
       /* console.log('views:::');
        console.log(bills);
        this.bills = bills;
      }, error => console.log('ici error ${error}'));
      this. testSubject.next(this.billController.getAllDocuments());*/
    // this.bills$
/*
    this.initDatabase$.subscribe(result => {
      if ( result ) {
        console.log('result');
       /* this.bills$.subscribe(
          bills => {
            this.bills = bills;
            console.log('apres subscribes ::');
            console.log(bills);
          });

      } else {
        console.log('fail ::');
        console.log(result);
      }
     this.billBusiness.getBills();
    });

    this.billBusiness.getBills().subscribe(bills => {
      console.log('coucoucoucou:::  ${bills}');
      console.log(bills);
      this.bills = bills;

    });*/
  }

  openDialog(): void {
  /*  const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

   const dialogRef = this.dialog.open(CustomerEditorComponent, {
     // data: { fistName: this.firstName},
      height: this.DIALOG_HEIGHT,
      width: this.DIALOG_WIDTH,
      panelClass: 'add-dialog-container'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.customerBusiness.createCustomers(this.customerBusiness.customerFOtoBO(result));
      console.log(result);
    });*/
  }


  public drop(event: CdkDragDrop<Customer[]>) {
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
    // this.test$.subscribe().unsubscribe();
  }


}
