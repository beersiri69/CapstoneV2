export class Transaction {
    No : string | undefined;
    Date: Date | undefined;
    Action: string | undefined;
    Type: string | undefined;
    Volume_D: number | undefined;
    Volume_G: number | undefined;
    Price_D: number | undefined;
    Price_G: number | undefined;
    Balance_D: number | undefined;
    Balance_G: number | undefined;
}
 
export interface TransactionAll{
    result : Transaction[]
    message : string
}
