import { Injectable } from '@angular/core';

import { Prayer } from './prayer';

@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  private PRAYERS: Prayer[] = [
    {
        id: 0,
        prayerName: "The Apostles' Creed",
        paragraph1: `I believe in God,
  the Father Almighty,
  Creator of heaven and earth,
  and in Jesus Christ, His only Son, our Lord,
  who was conceived by the Holy Spirit,
  born of the Virgin Mary,
  suffered under Pontius Pilate,
  was crucified, died and was buried;
  He descended into hell;
  on the third day He rose again from the dead;
  He ascended into heaven,
  and is seated at the right hand of God the Father Almighty;
  from there He will come to judge the living and the dead.
  I believe in the Holy Spirit,
  the Holy Catholic Church,
  the communion of Saints,
  the forgiveness of sins,
  the resurrection of the body,
  and life everlasting.

Amen.`,
        paragraph2: 'Apostles Creed',
        paragraph3: 'Apostles Creed'
    },
    {
      id: 1,
      prayerName: 'Prayer to St. Michael the Archangel',
      paragraph1: `St. Michael the Archangel, defend us in battle.
      Be our defense against the wickedness and snares of the Devil.
      May God rebuke him, we humbly pray, and do thou,
      O Prince of the heavenly hosts, by the power of God, thrust into hell Satan,
      and all the evil spirits, who prowl about the world seeking the ruin of souls.`,
      paragraph2: 'Prayer to St. Michael the Archangel',
      paragraph3: 'Prayer to St. Michael the Archangel'
    },
    {
      id: 2,
      prayerName: 'Prayer to the Holy Spirit',
      paragraph1: `Spirit of wisdom and understanding,
      enlighten our minds to perceive the mysteries of the universe in relation to eternity.
      Spirit of right judgment and courage, guide us and make us firm in our baptismal decision to follow Jesus' way of love.
      Spirit of knowledge and reverence, help us to see the lasting value of justice and mercy in our everyday
      dealings with one another. May we respect life as we work to solve problems of family and nation,
      economy and ecology. Spirit of God, spark our faith, hope and love into new action each day.
      Fill our lives with wonder and awe in your presence which penetrates all creation. Amen.`,
      paragraph2: 'Prayer to the Holy Spirit',
      paragraph3: 'Prayer to the Holy Spirit'
    }
];

  constructor() { }

  getPrayer(id: number): Prayer {
    return this.PRAYERS[id];
  }


  getPrayerList(): Prayer[] {
    return this.PRAYERS;
  }
}
