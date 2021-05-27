
export class Price{
    Date: String
    Gasohol95_Cost: Number
    Gasohol95_Price:Number
    Diesel_Cost:Number
    Diesel_Price:Number
}

export class Customer{
    Customer_Title:String
    Customer_Name:String
    Customer_Surname:String
    Taxpayer_ID:String

}

export class Purchase {
    Customer: any
    Deliver: any[]
    Depart_Location: any
    Payment: any
    Staff: any
    PO_NO: any
    e_Bill_NO: any
    Location_ID: any
    Customer_ID: any
    Staff_ID: any
    Gas_type: any
    Filling_time:any
    Fuel_Amount: any
    Order_Date: any
    Deliver_Date: any
}

export interface InvoiceAll{
    result:Purchase[],
    Price:Price[],
    Customer:Customer[],
    GetPayment:String
    Payment:String
    Message:String
}