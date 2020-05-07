import { Product } from './product';
import { Vendor } from './vendor';

export class Inventorytxn {
    public inventoryId:Number;
    public qty:Number;
    public dateOfTxn:Date;
    public txtType:String;
    public prod:Product;
    public vend:Vendor;
}
