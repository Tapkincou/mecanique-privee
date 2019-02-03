import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { ProductBusiness } from './business/product-business';
import { BillBusiness } from './business/bill-business';
import { CustomerBusiness } from './business/customer-business';

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

  private currentView;

  private productBusiness;

  constructor (public viewContainerRef: ViewContainerRef) {

    this.currentView = this.CUSTOMER_VIEW;
    this.productBusiness = new ProductBusiness();


  }

  public changeCurrentView(view: string) {
    // console.log('changeCurrentView called : ' + view + ' / current =' + this.currentView);
      if (this.currentView !== view) {
        this.currentView = view;
        // console.log('view changed ' + view);
      }
  }

  public isCurrentView(view) {
    // console.log('is current ' + view);
    return (this.currentView === view ? true : false);
  }

  public getCurrentView = () => this.currentView;


}
