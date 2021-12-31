import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  addProduct_api = "http://localhost/admin-MobiStore/php/addNewProduct.php";
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>("http://localhost/admin-MobiStore/php/adminGetProduct.php",{withCredentials:true})
  }
  removeAdminItem(){
    return this.http.get("http://localhost/admin-MobiStore/php/removeAdminProducts.php",{withCredentials:true});
  }
  updateAdminItem(){
    return this.http.get("http://localhost/admin-MobiStore/php/updateAdminProduct.php",{withCredentials:true});
  }
  add(data:any): Observable<any> 
  {
    return this.http.post(this.addProduct_api,data,{withCredentials:true});
  }
}
