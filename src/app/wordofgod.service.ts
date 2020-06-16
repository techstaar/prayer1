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
        id: 1,
        wordofgod: `Call to me and I will answer you, and will tell you great and hidden things that you have not known.`,
        reference: 'Jeremiah 33 : 3',
    },
    {
      id: 2,
      wordofgod: `May the God of hope fill you with all joy and peace in believing, so that you may abound in hope by the power of the Holy Spirit`,
      reference: 'Romans 15 : 13',
    },
    {
      id: 3,
      wordofgod: `But those who wait for the Lord shall renew their strength,
      they shall mount up with wings like eagles,
  they shall run and not be weary,
      they shall walk and not faint.`,
      reference: 'Isaiah 40 : 31',
    },
    {
      id: 4,
      wordofgod: `Whatever you ask for in prayer with faith, you will receive.`,
      reference: 'Matthew 21 : 22',
    },
    {
      id: 5,
      wordofgod: `Humble yourselves therefore under the mighty hand of God, so that he may exalt you in due time.`,
      reference: '1 Peter 5 : 6',
    },
    {
      id: 6,
      wordofgod: `So I tell you, whatever you ask for in prayer, believe that you have received[a] it, and it will be yours.`,
      reference: 'Mark 11 : 24',
    },
    {
      id: 7,
      wordofgod: `Be strong and courageous; do not be frightened or dismayed, for the Lord your God is with you wherever you go.`,
      reference: 'Joshua 1 : 9',
    },
    {
      id: 8,
      wordofgod: `I will not leave you orphaned; I am coming to you.`,
      reference: 'John 14 : 18',
    },
    {
      id: 9,
      wordofgod: `In all your ways acknowledge him, and he will make straight your paths.`,
      reference: 'Proverbs 3 : 6',
    },
    {
      id: 10,
      wordofgod: `Believe on the Lord Jesus, and you will be saved, you and your household.`,
      reference: 'Acts 16 : 31',
    },
    {
      id: 11,
      wordofgod: `When you search for me, you will find me; if you seek me with all your heart`,
      reference: 'Jeremiah 29:13',
    },
    {
      id: 12,
      wordofgod: `Blessed are the pure in heart, for they will see God.`,
      reference: 'Proverbs 3 : 6',
    },
    {
      id: 13,
      wordofgod: `In all your ways acknowledge him, and he will make straight your paths.`,
      reference: 'Matthew 5:8',
    },
    {
      id: 14,
      wordofgod: `I can do all things through him who strengthens me.`,
      reference: 'Philippians 4 : 13',
    },
    {
      id: 15,
      wordofgod: `In all your ways acknowledge him, and he will make straight your paths.`,
      reference: 'Proverbs 3 : 6',
    },
    {
      id: 16,
      wordofgod: `He gives power to the faint, and strengthens the powerless.`,
      reference: 'Isaiah 40 : 29',
    },
    {
      id: 17,
      wordofgod: `If in my name you ask me for anything, I will do it.`,
      reference: 'John 14 : 14',
    },
    {
      id: 18,
      wordofgod: `For with you is the fountain of life; in your light we see light.`,
      reference: 'Psalm 36 : 9',
    },
    {
      id: 19,
      wordofgod: `The human mind plans the way, but the Lord directs the steps.`,
      reference: 'Proverbs 16 : 9 ',
    },
    {
      id: 20,
      wordofgod: `The Lord has heard my supplication; the Lord accepts my prayer.`,
      reference: 'Psalm 6 : 9',
    },
];

  constructor() { }

  getWordOfGod(): WordOfGod {
    return this.WORDOFGOD_LIST[this.getRandomNumberBetween(1, 20)];
  }


  getWordOfGodist(): WordOfGod[] {
    return this.WORDOFGOD_LIST;
  }

  getRandomNumberBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
  }
}
