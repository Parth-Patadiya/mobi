import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartService : CartService) {
    this.gT();
   }
  handler:any = null;
  grand_t:any;

  ngOnInit(): void {
    this.loadStripe();
  }
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JyyNwSIUxoyD3JSshoXL8TTdyCuLbw7l8X6ngNfhNRpzcC1d0u6tK79WbKTtAekCgMc6uM9hdRxl1fGhV1RW4fw00YWTW3oZG',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JyyNwSIUxoyD3JSshoXL8TTdyCuLbw7l8X6ngNfhNRpzcC1d0u6tK79WbKTtAekCgMc6uM9hdRxl1fGhV1RW4fw00YWTW3oZG',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

  gT()
  {
    this.cartService.gT().subscribe(res=>{this.grand_t=res})
  }
}
