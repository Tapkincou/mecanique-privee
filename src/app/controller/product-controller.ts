import { Product } from "../data-object/product";

export class ProductController {


  /**
   *
   */
  public selectAllProducts() {
    return this.bouchonSelectAllProducts();
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
    return [
      { id: 1, name: 'article1', cost: 10, type: 'type1' },
      { id: 2, name: 'article2', cost: 20, type: 'type2' },
      { id: 3, name: 'article3', cost: 30, type: 'type1' },
      { id: 4, name: 'article4', cost: 40, type: 'type2' }];
  }

  private bouchonSelectProductById() {
    return <Product><any>{ id: 1, name: 'article1', cost: 10, type: 'type1' };
  }

}
