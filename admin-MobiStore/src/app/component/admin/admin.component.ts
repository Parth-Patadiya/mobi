import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  grand_t:any;
  constructor(private route:Router, private adminservice : AdminService,private http:HttpClient,private cookie: CookieService ) {
    
  }
  ngOnInit(): void {

    this.adminservice.getProducts()
    .subscribe(res=>{
      this.products = res;
    })
  }
  
  removeItem(item: any){
    this.adminservice.removeAdminItem().subscribe(res=>{this.grand_t=res})
    this.cookie.set('id',item.id);
    window.location.reload();
  }
  
  updateItem(item: any)
  {
    this.adminservice.updateAdminItem().subscribe(res=>{this.grand_t=res})
    this.cookie.set('uid',item.id);
  }

  addNewProduct()
  {
    this.route.navigate(['/addForm']);
  }

}
