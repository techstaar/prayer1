import { WordofgodService } from './../wordofgod.service';
import { WordOfGod } from './../wordofgod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-home',
  templateUrl: './prayer-home.component.html',
  styleUrls: ['./prayer-home.component.css']
})
export class PrayerHomeComponent implements OnInit {

  wordofgod: WordOfGod;

  constructor(private wordofGodService: WordofgodService) { }

  ngOnInit(): void {
    this.wordofgod =  this.wordofGodService.getWordOfGod();
  }

}
