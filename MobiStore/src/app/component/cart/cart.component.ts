import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  grand_t:any;
  constructor(private route:Router, private cartService : CartService,private http:HttpClient,private cookie: CookieService) {
    this.gT();
   }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      //  this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  gT()
  {
    this.cartService.gT().subscribe(res=>{this.grand_t=res})
  }
  removeItem(item: any){
    this.cartService.removeCartItem().subscribe(res=>{this.grand_t=res})
    this.cookie.set('id',item.id);
    window.location.reload();
  }
  
  ggT()
  {
    this.cartService.ggT().subscribe(()=>{this.route.navigate(['/checkout'])});
  }
  emptycart(){
    this.cartService.removeAllCart().subscribe(res=>{this.grand_t=res})
    window.location.reload();
  }

}
