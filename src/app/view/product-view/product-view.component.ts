
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductBusiness } from 'src/app/business/product-business';
import { Product } from 'src/app/business-object/product';
import { Subscriber, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  public name = 'app-product-view';
  private productBusiness = new ProductBusiness();
  private products$: Observable<Array<Product>>;
  private productsSubject: BehaviorSubject<Product[]>;

  public products: Array<Product>;
  constructor() {
    this.productBusiness = new ProductBusiness();
    this.productsSubject = new  BehaviorSubject<Product[]>(this.productBusiness.getProducts());
  }

  ngOnInit() {
    this.products$ = this.productsSubject.asObservable();
    this.productBusiness.updateProducts();
    console.log('init ' + name);
    this.products$.subscribe( (products) => {
      this.products = products;
      console.log('products::');
      console.log(products);

    });



  }

}
