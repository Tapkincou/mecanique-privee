import { Bill } from '../business-object/bill';
import { BillController } from '../controller/bill-controller';
import { BillDO } from '../data-object/billDO';
import { Observable, BehaviorSubject } from 'rxjs';
import { BillsDO } from '../data-object/billsDO';

/**
 *
 */
export class BillBusiness {

    constructor() {
        this.initDatabase();
    }


    /**
     *
     */
    private billController: BillController = new BillController('billdatabase');

    public initDatabase(): Boolean {
       return this.billController.initDatabase();
    }

    /**
     *
     */
    public getBills(): any {
    const prom = new Promise(this.billController.selectAllBills());
    // return this.billController.selectAllBills();
    /*const billsDOSubject: BehaviorSubject<BillsDO> = new  BehaviorSubject<BillsDO>(this.billController.selectAllBills(() => {}));
    const billsDO$ = billsDOSubject.asObservable();
    const bills = new Array<Bill>();

    billsDO$.subscribe(
        (billsDO) => {
            console.log('abonnement au controller');
            console.log(billsDO);
            return billsDO;
        }, error => { console.log(error); },
        () => { console.log('fin'); }
    );

    // this.billController.selectAllBills((billsDO) => {
       /* billDO.rows.forEach(row => {
            bills.push(row.doc);
        });*/
     //   console.log('dans le callback ::');
     //   console.log(billsDO);
    //    return billsDO;
    // });

    prom.then(val => {
        console.log('Promise.all Result:', val);
      });

    return prom;
    }


    /**
     *
     *
     */
    public getBillById(id: number) {
     return <Bill>this.billController.selectProductById(id);
    }

}
