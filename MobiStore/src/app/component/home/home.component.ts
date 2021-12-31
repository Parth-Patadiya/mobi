import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total_i:any;
  constructor(private apiService: ApiService,private cartService : CartService) {
    this.total_item();
   }
   public filterCategory : any;
   public productList : any;
  ngOnInit(): void {
    this.apiService.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  addtocart(item: any){
    console.log(item);
    
    this.cartService.addtoCart(item).subscribe(res=>{console.log(res);
      window.location.reload();
      });
  }


  total_item(){
    this.apiService.gettotalItem().subscribe(res=>{this.total_i=res})
    console.log(this.total_i);
    
   }
}
