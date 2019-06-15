import { Bill } from '../business-object/bill';
import { BillController } from '../controller/bill-controller';
import { BillDO } from '../data-object/billDO';
import { Observable, BehaviorSubject, from, Subject } from 'rxjs';
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

    private bills = new Array<Bill>();
    getBillsSubject = new BehaviorSubject<any>(this.bills);

    public getBills() {
      return this.bills;
  }



    /*   from(this.billController.selectAllBills()).subscribe(data => {
            console.log('dans get bills');
            console.log(data);
            this.bills = data;
            console.log(this.bills);
        });


   /* public getBills(): Promise<any> {
        console.log('dans le buz ::');
        return (this.billController.selectAllBills()); /*.then( (result) => {
            const documents = new Array<Object>();
            console.log('CA MARCHE DE FOU');
            console.log(result.rows);
            // return Promise.all(result.rows); // Promise.all
             this.bizbill = (result.rows);
        }).catch( (error) => {
          /*if (Database.ERROR_DATA_NOT_FOUND === error.name) {
            console.log('not found');
            // not found
          } else {
            // other error
            console.log('error ::');
            console.log(error);
            throw error;
        //  }
        }); /// new Promise<BillDO[]>

    }
*/
    /**
     *
     *
     */
    public getBillById(id: number) {
     return <Bill>this.billController.selectProductById(id);
    }

}
