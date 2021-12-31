import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  acart = "http://localhost/MobiStore/php/addtoCart.php";

  constructor(private http:HttpClient) { }

  addtoCart(product : any): Observable<any>{
    
    return this.http.post(this.acart,product,{withCredentials:true});
  
  }

  getProducts(){
    return this.http.get<any>("http://localhost/MobiStore/php/getProduts.php",{withCredentials:true})
  }


  gT(){
    return this.http.get("http://localhost/MobiStore/php/getProdutsgt.php",{withCredentials:true});   
  }

  ggT(){
    return this.http.post("http://localhost/MobiStore/php/StoreGrand_t.php",{withCredentials:true});   
  }
  removeCartItem(){
    return this.http.get("http://localhost/MobiStore/php/removeProducts.php",{withCredentials:true});
  }

  removeAllCart(){
    return this.http.get("http://localhost/MobiStore/php/removeAllProducts.php",{withCredentials:true});
  }
}
