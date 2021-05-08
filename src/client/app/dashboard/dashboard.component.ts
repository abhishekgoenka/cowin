import { Component, OnInit } from '@angular/core';
import { Center } from '../models/center';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  public centers: Center[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.centers().subscribe(r => this.centers = r.centers);
  }

}
