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


 // console.log(new Product().DOtoBO(productDO.doc));
 // const product = new Product().DOtoBO(productDO.doc); // customerDO.getDoc();
 // customer.set_id(customerDO.get_id());
  return null;
  /*return Product.newProduct()
              /** Into ProductDO, default doc._id = null */
             /* .setName(productDO.doc.name)
              .setCost(productDO.doc.cost)
              .setType(productDO.doc.type)
              .build();
*/
}

  public getProductById(id: number) {
   return <Product>this.productController.selectProductById(id);
  }

}

