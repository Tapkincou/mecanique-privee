import { Customer } from '../business-object/customer';
import { CustomerController } from '../controller/customer-controller';
import { CustomerDO } from '../data-object/customerDO';
import { v4 } from 'uuid';
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
    public getCustomers() {
        return this.customers;
    }


    public createCustomers(customerBO: Customer) {
        if (customerBO.get_id !== null) {
            customerBO.set_id(v4.toString());
        }
        console.log(this.customerController.putDocument(customerBO));
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
        console.log(new Customer().DOtoBO(customerDO.doc));
        const customer = new Customer().DOtoBO(customerDO.doc); // customerDO.getDoc();
       // customer.set_id(customerDO.get_id());
        return customer;


    }

    private customerBOtoDO(customerDO: CustomerDO): Customer {

        /** Into CustomerDO, default doc._id = null */
        console.log('CustomerDOtoBO');
        console.log(new Customer().DOtoBO(customerDO.doc));
        const customer = new Customer().DOtoBO(customerDO.doc); // customerDO.getDoc();
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
