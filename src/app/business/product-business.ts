import { ProductController } from '../controller/product-controller';
import { Product } from '../business-object/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductDO } from '../data-object/product';

export class ProductBusiness {
  private productController = new ProductController('productsdatabase');


  private products = new Array<Product>();


  public getProducts() {
    return  <Product[]>this.products;
}

public updateProducts() {
  this.productController.selectAllProducts().subscribe( (data) => {
      console.log('updateProducts');
      console.log(data);

      data.rows.forEach( (element: ProductDO) => {
          this.products.push((this.productDOtoBO(element)));
      });

  });
}


private productDOtoBO(productDO: ProductDO): Product {

  /** Into ProductDO, default doc._id = null */
  console.log('ProductDOtoBO');
  console.log(new Product(productDO.doc));
  const product = new Product(productDO.doc); // customerDO.getDoc();
 // customer.set_id(customerDO.get_id());
  return product;


}

  public getProductById(id: number) {
   return <Product>this.productController.selectProductById(id);
  }

}

