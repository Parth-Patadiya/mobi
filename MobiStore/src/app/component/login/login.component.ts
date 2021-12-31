import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private route:Router,private cookie: CookieService ) { }
  form:FormGroup | any;

  ngOnInit(): void {
    this.form = new FormGroup({ 
      email: new FormControl(""),
      pwd: new FormControl("")
   }); 
  }
  login_user()
  {
    this.cookie.set('email',this.form.value.email);
    this.apiService.api_login(this.form.value).subscribe(()=>{this.route.navigate(['/home'])})
  }
  reg_user():void
  {
      const redirect = this.apiService.redirectUrl ? this.apiService.redirectUrl : '/register';
      this.route.navigate([redirect]);  
    // this.route.navigate(['/register'])
  }
}
