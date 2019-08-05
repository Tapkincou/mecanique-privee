import { Component, ViewContainerRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ProductBusiness } from './business/product-business';
import { BillBusiness } from './business/bill-business';
import { CustomerBusiness } from './business/customer-business';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Customer } from './business-object/customer';
import { CustomerViewComponent } from './view/customer-view/customer-view.component';
import { BehaviorSubject } from 'rxjs';
import { DragNDropService } from './services/drag-n-drop/drag-n-drop-service.service';
import { NullInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  public readonly PRODUCT_VIEW: string = 'app-product-view';
  public readonly CUSTOMER_VIEW: string = 'app-customer-view';
  public readonly ESTIMATE_VIEW: string = 'app-estimate-view';
  public readonly BILL_VIEW: string = 'app-bill-view';
  title = 'mecanique-privee';

  private currentView;
  // @ViewChild('customerListData') customerListData: ElementRef;
  @ViewChild(CustomerViewComponent) customerViewComponent: CustomerViewComponent;
  @ViewChild('billMakerList') public billMakerList: CdkDropList;
//  @ViewChild('billMaker')
  public billMaker: Customer[] = [];

  /*[new Customer('3', 'testfisrtname3', 'testlastname3', null, null, null, null, null),
  new Customer('42', 'testfisrtname4', 'testlastname4', null, null, null, null, null)];*/

  public allDropLists = [ 'customers', 'billMaker'];

  ngAfterViewInit() {

    this.customerViewComponent.whoAmI();
    this.billMakerList.connectedTo = this.customerViewComponent.customerListData;
    this.customerViewComponent.customerListData.connectedTo = this.billMakerList;
    console.log(this.billMakerList);
  }

  /*@ViewChild(CustomerViewComponent)
  private dropSubject: BehaviorSubject<CdkDragDrop<Array<Customer>>>;
*/
  constructor (public viewContainerRef: ViewContainerRef, public dragNDropService: DragNDropService) {


    this.currentView = this.BILL_VIEW; // CUSTOMER_VIEW
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

  public dropCustomer(event: CdkDragDrop<Customer[]>) {

    if ( this.billMaker.length > 0 ) {
      this.billMaker.length = 0;
    }
  // Only one value in billMaker array
    this.dragNDropService.dropWithoutRemove<Customer>(event);

  }
}
