import { ProductController } from '../controller/product-controller';
import { Product } from '../business-object/product';
import { BehaviorSubject, Observable } from 'rxjs';

export class ProductBusiness {
  private productController = new ProductController('productsdatabase');

  public getProducts() {
   return <Product[]>this.productController.selectAllProducts(() => {});
  }

  public getProductById(id: number) {
   return <Product>this.productController.selectProductById(id);
  }

}

