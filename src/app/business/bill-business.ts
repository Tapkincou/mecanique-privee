import { Bill } from '../data-object/bill';
import { BillController } from '../controller/bill-controller';

/**
 *
 */
export class BillBusiness {

    /**
     *
     */
    private billController = new BillController();

    /**
     *
     */
    public getBills() {
     return <Bill[]>this.billController.selectAllBills();
    }

    /**
     *
     *
     */
    public getBillById(id: number) {
     return <Bill>this.billController.selectProductById(id);
    }

}
