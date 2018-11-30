import { ProductController } from '../controller/product-controller';
import { Product } from '../data-object/product';

export class ProductBusiness {

  private productController = new ProductController();

  public getProducts() {
   return this.productController.selectAllProducts();
  }

  public getProductsById(id: number) {
   return <Product>this.productController.selectProductById(id);
  }

}

