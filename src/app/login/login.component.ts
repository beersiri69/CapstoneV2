import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl, FormBuilder, } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import {Login} from '../Model/login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  
  logalert: any ={};
 

  test: Date = new Date();
  public isCollapsed = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService : AuthService) {  this.myForm = this.fb.group({
    UserID: '',
    Password: '',  
  });}

  ngOnInit() {
    this.logalert.toggle = false;
    this.logalert.message = '';
    localStorage.clear();


    var html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }


  Logindata : Login | undefined;
  Onsubmit(){

    var id = this.myForm.get('UserID').value 
    var pwd = this.myForm.get('Password').value
    // localStorage.setItem("UserID", id);
    // localStorage.setItem("Password", pwd);
    this.authService.getLogin(id,pwd).subscribe(
      data => {
          if(data.result == null){
            //alert("Incorrect username");
            this.logalert.toggle = true 
            this.logalert.message = "Incorrect Username"
            
          }
          else{ 
            this.Logindata = data.result          
            // console.log(this.Logindata)
            // console.log("DB ID:" + this.Logindata.Staff_ID)
            // console.log("from ID:" + id)
            // console.log("DB Password:" + this.Logindata.Password)
            // console.log("from Password:" + pwd)
  
            if(pwd === this.Logindata.Password){
              
              localStorage.setItem("UserID",this.Logindata.Staff_ID)
              localStorage.setItem("UserName",this.Logindata.Staff_Name)
              localStorage.setItem("UserSurName",this.Logindata.Staff_Surname)
              localStorage.setItem("UserRole",this.Logindata.Role)
              this.router.navigateByUrl('/home');
              alert("Login Success");
            }        
            else
            {
              this.logalert.toggle = true 
              this.logalert.message = "Incorrect Password"
            }
          }
      },
      err =>{
        //alert("Cannot connect server");
      });
    //this.router.navigateByUrl('/home');
  }

}
