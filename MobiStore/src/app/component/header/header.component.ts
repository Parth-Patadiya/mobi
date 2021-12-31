import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookie : CookieService) { }

  ngOnInit(): void {
    
  }

  email={
    uemail:this.cookie.get('email')
 }
  demo()
  {
    if(this.cookie.get('email'))
    {
      return true;
    }
    else{
      return false;
    }
  }

  logout_user():void{
    this.cookie.delete('email');
    window.location.reload();
  }

  
}
