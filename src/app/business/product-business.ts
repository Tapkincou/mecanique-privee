import { ProductController } from '../controller/product-controller';
import { Product } from '../data-object/product';
import { BehaviorSubject, Observable } from 'rxjs';

export class ProductBusiness {
  private productController = new ProductController();

  public getProducts() {
   return <Product[]>this.productController.selectAllProducts();
  }

  public getProductById(id: number) {
   return <Product>this.productController.selectProductById(id);
  }

}

