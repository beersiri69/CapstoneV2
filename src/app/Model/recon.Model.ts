export interface Deliver {
    Deliver_ID: String
    Truck_NO :String
    Purchase_Order:Purchase
}

export class Payment{
    e_Bill_NO: String
    Invoice_NO: String
    Amount:Number
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


export interface ReconAll{
    Payment :Payment[],
    Purchase:Purchase[],
    Deliver: Deliver[],
    message:string
}