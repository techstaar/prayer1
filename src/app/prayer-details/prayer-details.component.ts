import { Prayer } from '../prayer';
import { Component, OnInit, Input } from '@angular/core';
import { PrayerService } from '../prayer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prayer-details',
  templateUrl: './prayer-details.component.html',
  styleUrls: ['./prayer-details.component.css']
})
export class PrayerDetailsComponent implements OnInit {

  id: number;
  prayer: Prayer;

  constructor(private route: ActivatedRoute,private router: Router,
    private prayerService: PrayerService) { }

  ngOnInit() {
    this.prayer = new Prayer();

    this.id = this.route.snapshot.params['id'];

    this.prayer = this.prayerService.getPrayer(this.id);

  }

  list(){
    this.router.navigate(['prayers']);
  }
}
