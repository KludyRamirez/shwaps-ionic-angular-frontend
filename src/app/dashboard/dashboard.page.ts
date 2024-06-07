import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public route: Router) { }

  async receipt()
  {
      this.route.navigate(['/buyer']);
  }

  ngOnInit() {
  }

}
