import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillBusiness } from 'src/app/business/bill-business';
import { Observable, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';
import { Bill } from 'src/app/business-object/bill';
import { from } from 'rxjs';
import { BillDO } from 'src/app/data-object/billDO';
import { BillController } from 'src/app/controller/bill-controller';
@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss']
})
export class BillViewComponent implements OnInit, OnDestroy {


  public name = 'app-bill-view';

  private billController = new BillController('billdatabase');
  public billBusiness = new BillBusiness();
  private bills$: Observable<any>;
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
    });*/

    this.billBusiness.getBills().subscribe(bills => {
      console.log('coucoucoucou:::  ${bills}');
      console.log(bills);
      this.bills = bills;

    });
  }

  ngOnDestroy() {
    // this.test$.subscribe().unsubscribe();
  }


}
