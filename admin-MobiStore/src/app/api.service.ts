import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://localhost/admin-MobiStore/php";
  reg_api = "http://localhost/admin-MobiStore/php/register.php";
  login_api = "http://localhost/admin-MobiStore/php/login.php";
  total_api = "http://localhost/admin-MobiStore/php/totalitem.php";
  
  redirectUrl: any;
  constructor( private http:HttpClient ) 
  {
    
  }
  readUsers(): Observable<Users[]>
  {
    return this.http.get<Users[]>(`${this.PHP_API_SERVER}/index.php`);
  }
  create(data: any): Observable<any> 
  {
    return this.http.post(this.reg_api, data);
  }
  api_login(data: any): Observable<any>
  {
    return this.http.post(this.login_api, data);
  }
  getProduct(){
    return this.http.get<any>("http://localhost/admin-MobiStore/php/product.php")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  gettotalItem(){
    return this.http.get(this.total_api,{withCredentials:true})
  }
}
