import { Customer } from '../business-object/customer';
import { CustomerController } from '../controller/customer-controller';

/**
 *
 */
export class CustomerBusiness {


    /**
     *
     */
    private customerController = new CustomerController('customerdatabase');

    /**
     *
     */
    public getCustomers() {
     return <Customer[]>this.customerController.selectAllCustomers(() => {});
    }

    /**
     *
     *
     */
    public getCustomerById(id: number) {
     return <Customer>this.customerController.selectCustomerById(id);
    }

}
