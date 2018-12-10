import { Component, OnInit } from '@angular/core';
import { BillBusiness } from 'src/app/business/bill-business';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/data-object/bill';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.scss']
})
export class BillViewComponent implements OnInit {


  public name = 'app-bill-view';

  private billBusiness = new BillBusiness();
  private bills$: Observable<Bill[]>;
  private billsSubject: BehaviorSubject<Bill[]> = new  BehaviorSubject<Bill[]>(this.billBusiness.getBills());
  public bills: Array<Bill>;

  constructor() {
    this.bills$ = this.billsSubject.asObservable();
   }

  ngOnInit() {
    console.log('init ' + name);
    this.bills$.subscribe(
      bills => {
        this.bills = bills;
        console.log(bills);
      });
  }

}
