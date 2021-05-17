export class Customer {
    Customer_ID: string | undefined;
    Taxpayer_ID: string | undefined;
    Taxpayer_Address: string | undefined;
    Taxpayer_Title: string | undefined;
    Taxpayer_Name: string | undefined;
    Taxpayer_Surname: string | undefined;
    Customer_Title: string | undefined;
    Customer_Name: string | undefined;
    Customer_Surname: string | undefined;
    Customer_Tel: string | undefined;
}
export interface CustomerAll{
    result : Customer[]
    message : string
}
