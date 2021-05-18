export class Login {
    Staff_ID: string | undefined;
    Role: string | undefined;
    Staff_Title: string | undefined;
    Staff_Name: string | undefined;
    Staff_Surname: string | undefined;
    Staff_Tel: string | undefined;
    Password: string | undefined;
}
export interface Logindata{
    result : Login
    message : string
}