import { Customer } from '../data-object/customer';
import { CustomerController } from '../controller/customer-controller';

/**
 *
 */
export class CustomerBusiness {


    /**
     *
     */
    private customerController = new CustomerController();

    /**
     *
     */
    public getCustomers() {
     return <Customer[]>this.customerController.selectAllCustomers();
    }

    /**
     *
     *
     */
    public getCustomerById(id: number) {
     return <Customer>this.customerController.selectCustomerById(id);
    }

}
