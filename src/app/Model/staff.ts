// element 3
export class Staff {
    Staff_ID: string | undefined;
    Role: string | undefined;
    Staff_Title: string | undefined;
    Staff_Name: string | undefined;
    Staff_Surname: string | undefined;
    Staff_Tel: string | undefined;
    Password: string | undefined;
}
export interface StaffAll{
    result : Staff[]
    message : string
}