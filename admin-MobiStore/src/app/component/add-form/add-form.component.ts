import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { CookieService } from 'ngx-cookie-service';
import { RouteConfigLoadEnd, Router } from '@angular/router';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  form:FormGroup | any;
  fileName = '';
  
  constructor(private adminservice:AdminService,private http: HttpClient ,private route: Router, private cookie:CookieService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl("",[Validators.required]),
      price: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      category: new FormControl("",[Validators.required]),
      image: new FormControl("",[Validators.required]),
    })
  }
  add_New_product()
  {
    console.log(this.form.value);
    this.adminservice.add(this.form.value).subscribe(()=>{this.route.navigate(['/admin'])})
  }

  onFileSelected(event:any) {
    const file:File = event.target.files[0];
  
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
        console.log(this.fileName);
        this.cookie.set('img_name',this.fileName);
    }
}

}
