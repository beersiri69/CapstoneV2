export class Transaction {
    No : string | undefined;
    Date: Date | undefined;
    Action: string | undefined;
    Type: string | undefined;
    Volume: number | undefined;
    Amount: number | undefined;
}
 
export interface TransactionAll{
    result : Transaction[]
    message : string
}
