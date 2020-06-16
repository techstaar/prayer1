import { WordofgodService } from './../wordofgod.service';
import { WordOfGod } from './../wordofgod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-wordofgod',
  templateUrl: './prayer-wordofgod.component.html',
  styleUrls: ['./prayer-wordofgod.component.css']
})
export class PrayerWordofgodComponent implements OnInit {

  wordofgod: WordOfGod;

  constructor(private wordofGodService: WordofgodService) { }

  ngOnInit(): void {
    this.wordofgod =  this.wordofGodService.getWordOfGod();
  }

}
