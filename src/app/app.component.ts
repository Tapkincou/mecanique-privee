import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { BillViewComponent } from './bill-view/bill-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public readonly PRODUCT_VIEW: string = 'app-product-view';
  public readonly CUSTOMER_VIEW: string = 'app-customer-view';
  public readonly ESTIMATE_VIEW: string = 'app-estimate-view';
  public readonly BILL_VIEW: string = 'app-bill-view';
  title = 'mecanique-privee';

 // @ViewChild('appBillView', { read: ViewContainerRef }) BILL_VIEW;
  public currentView;
  // private BILL_VIEW = 'app-bill-view';

  constructor (public viewContainerRef: ViewContainerRef) {
    this.currentView = this.BILL_VIEW;
  }

  public changeCurrentView(view: string) {
    console.log('changeCurrentView called : ' + view + ' / current =' + this.currentView);
      if (this.currentView !== view) {
        this.currentView = view;
        console.log('view changed ' + view);
      }
  }

  public isCurrentView(view) {
    console.log('is current ' + view);
    return (this.currentView === view ? true : false);
  }

  public getCurrentView = () => this.currentView;


}
