import { Component, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mecanique-privee';

  public showBillView;

 // @ViewChild('appBillView', { read: ViewContainerRef }) BILL_VIEW;
  private currentview;
  // private BILL_VIEW = 'app-bill-view';
  private PRODUCT_VIEW = 'app-product-view';
  private CUSTOMER_VIEW = 'app-customer-view';
  private ESTIMATE_VIEW = 'app-estimate-view';
  private BILL_VIEW = 'app-bill-view';
  constructor (public viewContainerRef: ViewContainerRef) {
    this.currentview = this.BILL_VIEW;
  console.log('coucou');
  }

  public changeCurrentView(view: string) {
      if (this.currentview !== view) {
        this.currentview = view;
      }
  }

  public isCurrentView(view) {
    console.log(view);
    return (this.currentview === view ? true : false);
  }

}
