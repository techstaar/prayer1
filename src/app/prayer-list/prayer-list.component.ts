import { PrayerDetailsComponent } from '../prayer-details/prayer-details.component';
import { Observable } from "rxjs";
import { PrayerService } from "../prayer.service";
import { Prayer } from "../prayer";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayer-list',
  templateUrl: './prayer-list.component.html',
  styleUrls: ['./prayer-list.component.css']
})
export class PrayerListComponent implements OnInit {
  prayers: Prayer[];

  constructor(private prayerService: PrayerService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.prayers = this.prayerService.getPrayerList();
  }

  prayerDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
