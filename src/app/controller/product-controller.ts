import { Product } from '../business-object/product';
import { Database } from '../database';

export class ProductController extends Database {

  /**
   *
   */
  public selectAllProducts(callback: Function) {
    return <Product[]><any> this.getAllDocuments();
    // TODO
  }

  /**
   *
   * @param id: id of the product.
   */
  public selectProductById(id: number) {
    return new Product(this.bouchonSelectProductById());
    // TODO
  }

  private bouchonSelectAllProducts() {
    return <Product[]><any>[
      { id: 1, name: 'article1', cost: 10, type: 'type1' },
      { id: 2, name: 'article2', cost: 20, type: 'type2' },
      { id: 3, name: 'article3', cost: 30, type: 'type1' },
      { id: 4, name: 'article4', cost: 40, type: 'type2' }];
  }

  private bouchonSelectProductById() {
    return <Product><any>{ id: 1, name: 'article1', cost: 10, type: 'type1' };
  }

}
