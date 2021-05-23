export class Income {

    date : Date;
    Begin_D_L_:number;
    Begin_G_L_:number;
    Begin_D_B_:number;
    Begin_G_B_:number;
    AmountSold_D_L_:number;
    AmountSold_G_L_:number;
    AmountSold_D_B_:number;
    AmountSold_G_B_:number;
    AmountPurchase_D_L_:number;
    AmountPurchase_G_L_:number;
    AmountPurchase_D_B_:number;
    AmountPurchase_G_B_:number;
    Balance_D_L_:number;
    Balance_G_L_:number;
    Balance_D_B_:number;
    Balance_G_B_:number;

}



export interface IncomeAll{
    result : Income[]
    message : string
}
