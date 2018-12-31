import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillBusiness } from 'src/app/business/bill-business';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/business-object/bill';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss']
})
export class BillViewComponent implements OnInit, OnDestroy {


  public name = 'app-bill-view';

  private billBusiness = new BillBusiness();
  private bills$: Observable<any>;
 // private initDatabase$: Observable<Boolean>;   Bill[]
  private billsSubject: BehaviorSubject<any> = new  BehaviorSubject<any>(this.billBusiness.getBills());
 // private initDatabaseSubject: BehaviorSubject<Boolean> = new  BehaviorSubject<Boolean>(this.billBusiness.InitDatabase());
  public bills: any; // Array<Bill>;

  constructor() {
    // this.billBusiness.initDatabase();
    // this.initDatabase$ = this.initDatabaseSubject.asObservable();
    this.bills$ = this.billsSubject.asObservable();

    console.log('init ' + name);

    this.bills$.subscribe(
      bills => {
        this.bills = bills;
      });
   }

  ngOnInit() {
/*
    this.initDatabase$.subscribe(result => {
      if ( result ) {
        console.log('result');
       /* this.bills$.subscribe(
          bills => {
            this.bills = bills;
            console.log('apres subscribes ::');
            console.log(bills);
          });x

      } else {
        console.log('fail ::');
        console.log(result);
      }

    });
*/

  }

  ngOnDestroy() {

  }


}
