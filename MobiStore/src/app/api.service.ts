import { Injectable } from '@angular/core';
import { map,Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  redirectUrl:any;
  login_api= "http://localhost/MobiStore/php/login.php";
  total_api = "http://localhost/MobiStore/php/totalitem.php";
  reg_api = "http://localhost/MobiStore/php/register.php";
  constructor(private http:HttpClient) { }

  api_login(data:any):Observable<any>
  {
    return this.http.post(this.login_api,data);
  }

  getProduct(){
    return this.http.get<any>("http://localhost/MobiStore/php/product.php")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  create(data: any): Observable<any> 
  {
    return this.http.post(this.reg_api, data);
  }
  gettotalItem(){
    return this.http.get(this.total_api,{withCredentials:true})
  }
}
