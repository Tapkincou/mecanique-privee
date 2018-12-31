import { Bill } from '../business-object/bill';
import { BillController } from '../controller/bill-controller';
import { BillDO } from '../data-object/billDO';
import { Observable, BehaviorSubject } from 'rxjs';
import { BillsDO } from '../data-object/billsDO';

/**
 *
 */
export class BillBusiness {

    /**
     *
     */
    private billController: BillController = new BillController('billdatabase');

    /**
     *
     */
    public getBills(): any {
        const dataPromise = new Promise(this.billController.selectAllBills());
        dataPromise.then(val => {
            console.log('Promise.all Result:', val);
        });
        return dataPromise;
    }

    /**
     *
     *
     */
    public getBillById(id: number) {
     return <Bill>this.billController.selectProductById(id);
    }

}
