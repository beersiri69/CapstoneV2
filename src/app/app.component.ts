import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'fontend';
  ngOnInit(){
    localStorage.clear();
  }

  constructor(private router: Router,
              private authservice: AuthService ) {

    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          console.log(event.url)
            if(event.url !== '/login' && (this.authservice.CheckRole() === null)){
              this.router.navigateByUrl("/login")
            }
          // var cmp = this.authservice.CheckRole()
          //  if(cmp === "Staff"){
          //     console.log(cmp+ "is Manager")
          //  }
        }
      
    });

}
}
