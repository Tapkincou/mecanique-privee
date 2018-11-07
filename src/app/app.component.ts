import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'mecanique-privee';
  private currentview;
  private BILL_VIEW = 'app-bill-view';
  private PRODUCT_VIEW = 'app-product-view';
  private CUSTOMER_VIEW = 'app-customer-view';
  private ESTIMATE_VIEW = 'app-estimate-view';
  constructor () {
    this.currentview = this.BILL_VIEW;
  }


}
