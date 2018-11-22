import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { BillViewComponent } from './bill-view/bill-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mecanique-privee';

  private PRODUCT_VIEW = 'app-product-view';
  private CUSTOMER_VIEW = 'app-customer-view';
  private ESTIMATE_VIEW = 'app-estimate-view';
  private BILL_VIEW = 'app-bill-view';
 // @ViewChild('appBillView', { read: ViewContainerRef }) BILL_VIEW;
  public currentView;
  // private BILL_VIEW = 'app-bill-view';

  constructor (public viewContainerRef: ViewContainerRef) {

    this.currentView = this.BILL_VIEW;

  console.log('coucou');
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
