import { Injectable } from '@angular/core';

import { WordOfGod } from './wordofgod';

@Injectable({
  providedIn: 'root'
})
export class WordofgodService {


  private WORDOFGOD_LIST: WordOfGod[] = [
    {
        id: 0,
        wordofgod: `Call to me and I will answer you, and will tell you great and hidden things that you have not known.`,
        reference: 'Jeremiah 33 : 3',
    },
    {
      id: 0,
      wordofgod: ``,
      reference: 'Apostles Creed',
    },
    {
      id: 0,
      wordofgod: ``,
      reference: 'Apostles Creed',
    }
];

  constructor() { }

  getWordOfGod(id: number): WordOfGod {
    return this.WORDOFGOD_LIST[id];
  }


  getWordOfGodist(): WordOfGod[] {
    return this.WORDOFGOD_LIST;
  }
}
