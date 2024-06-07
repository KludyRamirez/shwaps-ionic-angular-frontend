import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.page.html',
  styleUrls: ['./buyer.page.scss'],
})
export class BuyerPage implements OnInit {

  constructor(public route: Router) { }
  async godash()
  {
      this.route.navigate(['/app-tabmenu']);
  }

  async goreceipt()
  {
      this.route.navigate(['/receipt']);
  }
  ngOnInit() {
  }

}
