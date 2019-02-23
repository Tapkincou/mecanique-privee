import { Customer } from '../business-object/customer';
import { CustomerController } from '../controller/customer-controller';
import { CustomerDO } from '../data-object/customerDO';

/**
 *
 */
export class CustomerBusiness {


    /**
     *
     */
    private customerController = new CustomerController('customerdatabase');
    private customers = new Array<Customer>();

    constructor() {
    }

    public closeDB() {
        this.customerController.completeDB();

    }

    public getCustomers() {
        return this.customers;
    }

    /**
     *
     */
    public updateCustomers() {
        this.customerController.selectAllCustomers().subscribe( (data) => {
            console.log('updateCustomers');
            console.log(data);

            data.rows.forEach( (element: CustomerDO) => {
                this.customers.push((this.customerDOtoBO(element)));
            });

        });
    }


    private customerDOtoBO(customerDO: CustomerDO): Customer {

        /** Into CustomerDO, default doc._id = null */
        console.log('CustomerDOtoBO');
        console.log(new Customer(customerDO.doc));
        const customer = new Customer(customerDO.doc); // customerDO.getDoc();
       // customer.set_id(customerDO.get_id());
        return customer;


    }

    /**
     *
     *
     */
    public getCustomerById(id: number) {
     return <Customer>this.customerController.selectCustomerById(id);
    }

}
