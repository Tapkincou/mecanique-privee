
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
  private products$: Observable<Product[]>;
  private productsSubject: BehaviorSubject<Product[]> = new  BehaviorSubject<Product[]>(this.productBusiness.getProducts());

  public products: Array<Product>;
  constructor() {
    this.products$ = this.productsSubject.asObservable();
  }

  ngOnInit() {
    console.log('init ' + name);
    this.products$.subscribe( products => this.products = products);
  }

}
