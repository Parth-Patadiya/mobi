import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  form: any ;
  form1:any;
  constructor(private route:Router , private checkoutApi:CheckoutService) { }

  ngOnInit(): void {

    this.form = new FormGroup({ 
      name: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      adr: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      state: new FormControl("",[Validators.required]),
      zip: new FormControl("",[Validators.required])
    });

    this.form1 = new FormGroup({});
  }
  ship_user()
  {
    console.log(this.form.value);
       this.checkoutApi.insert(this.form.value).subscribe(()=>{this.route.navigate(['/payment'])})
  }
  update_ship_user()
  {
  }
}
