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
        paragraph1: `I believe in God,<br>
  the Father Almighty,<br>
  Creator of heaven and earth,<br>
  and in Jesus Christ, His only Son, our Lord,<br>
  who was conceived by the Holy Spirit,<br>
  born of the Virgin Mary,<br>
  suffered under Pontius Pilate,<br>
  was crucified, died and was buried;<br>
  He descended into hell;<br>
  on the third day He rose again from the dead;<br>
  He ascended into heaven,<br>
  and is seated at the right hand of God the Father Almighty;<br>
  from there He will come to judge the living and the dead.<br>
  I believe in the Holy Spirit,<br>
  the Holy Catholic Church,<br>
  the communion of Saints,<br>
  the forgiveness of sins,<br>
  the resurrection of the body,<br>
  and life everlasting.<br><br>Amen.`,
        paragraph2: 'Apostles Creed',
        paragraph3: 'Apostles Creed'
    },
    {
      id: 1,
      prayerName: 'Prayer to St. Michael the Archangel',
      paragraph1: `St. Michael the Archangel, defend us in battle.<br>
      Be our defense against the wickedness and snares of the Devil.<br>
      May God rebuke him, we humbly pray, <br>and do thou,<br>
      O Prince of the heavenly hosts, <br>by the power of God, <br>thrust into hell Satan,<br>
      and all the evil spirits, <br>who prowl about the world <br>seeking the ruin of souls.<br><br>Amen.`,
      paragraph2: 'Prayer to St. Michael the Archangel',
      paragraph3: 'Prayer to St. Michael the Archangel'
    },
    {
      id: 2,
      prayerName: 'Prayer to the Holy Spirit',
      paragraph1: `Spirit of wisdom and understanding, enlighten our minds to perceive
      the mysteries of the universe in relation to eternity.<br>
      Spirit of right judgment and courage, guide us and make us firm in our baptismal decision
      to follow Jesus' way of love.<br>
      Spirit of knowledge and reverence, help us to see the lasting value of
      justice and mercy in our everyday dealings with one another.<br>
      May we respect life as we work to solve problems of family and nation,
      economy and ecology.<br>
      Spirit of God, spark our faith, hope and love into new action each day.<br>
      Fill our lives with wonder and awe in your presence which penetrates all creation.<br><br>
      Amen.`,
      paragraph2: 'Prayer to the Holy Spirit',
      paragraph3: 'Prayer to the Holy Spirit'
    },
    {
      id: 3,
      prayerName: 'Act of Contrition',
      paragraph1: `O my God, I am heartily sorry for having offended You, and I detest all my sins
      because of Your just punishments, but most of all because they offend You, my God,
      who are all-good and deserving of all my love.  I firmly resolve, with the help of Your
      grace, to sin no more and to avoid the near occasion of sin.  <br> <br>Amen.`,
      paragraph2: 'Act of Contrition',
      paragraph3: 'Act of Contrition'
    },
    {
      id: 4,
      prayerName: 'Act of Spiritual Communion',
      paragraph1: `My Jesus,<br>
      I believe that You are present in the Most Holy Sacrament.<br>
      I love You above all things,<br>
      and I desire to receive You into my soul.<br>
      Since I cannot at this moment receive You sacramentally,<br>
      come at least spiritually into my heart.<br>
      I embrace You as if You were already there<br>
      and unite myself wholly to You.<br>
      Never permit me to be separated from You.<br><br>
      Amen.`,
      paragraph2: 'Act of Spiritual Communion',
      paragraph3: 'Act of Spiritual Communion'
    },
    {
      id: 5,
      prayerName: 'The Angelus',
      paragraph1: `V: The Angel of the Lord declared unto Mary.<br>
      R: <b>And she conceived by the Holy Spirit.</b><br>
      V: Hail Mary, full of grace, the Lord is with you. Blessed are you among women, and
      blessed is the fruit of your womb, Jesus.<br>
      R: <b>Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death.Amen.</b><br>

      V: Behold the handmaid of the Lord.<br>
      R: <b>Be it done unto me according to thy word.</b><br>
      V: Hail Mary...<br>
      R: <b>Holy Mary...</b><br>

      V: And the Word was made Flesh.<br>
      R: <b>And It dwelt among us.</b><br>
      V: Hail Mary...<br>
      R: <b>Holy Mary...</b><br>

      V: Pray for us, O Holy Mother of God.<br>
      R: <b>That we may be made worthy of the promises of Christ.</b><br>

      V: Let us Pray.<br>
      All: <b>Pour forth, we beseech Thee, O Lord, Thy, grace into our hearts; that, we to whom
      the Incarnation of Christ, Thy Son, was made known by the message of an Angel,
      may by His Passion and Cross, be brought to the glory of His Resurrection through
      the same Christ our Lord. <br>Amen.</b>`,
      paragraph2: 'The Angelus',
      paragraph3: 'The Angelus'
    },
    {
      id: 6,
      prayerName: "Three O' Clock Prayer to the Divine Mercy",
      paragraph1: `You expired, O Jesus,<br>
      but the source of life gushed forth for souls<br>
      and an ocean of mercy opened up for the whole world.<br>
      O Fount of Life,<br>
      unfathomable Divine Mercy,<br>
      envelop the whole world<br>
      and empty Yourself out upon us.<br>
      O Blood and Water,<br>
      which gushed forth from the Heart of Jesus<br>
      as a fount of mercy for us,<br>
      I trust in You.<br><br>

      Amen.`,
      paragraph2: "Three O' Clock Prayer to the Divine Mercy",
      paragraph3: "Three O' Clock Prayer to the Divine Mercy"
    },
    {
      id: 7,
      prayerName: 'Glory Be to the Father',
      paragraph1: `Glory be to the Father and to the Son and to the Holy Spirit.
      As it was in the beginning is now, and ever shall be, world without end. <br><br>Amen.`,
      paragraph2: 'Glory Be to the Father',
      paragraph3: 'Glory Be to the Father'
    },
    {
      id: 8,
      prayerName: 'Hail, Holy Queen',
      paragraph1: `Hail, holy Queen, Mother of mercy, hail, our life, our sweetness and our hope.
      To thee do we cry, poor banished children of Eve: to thee do we send up our sighs, mourning
      and weeping in this vale of tears. Turn then, most gracious Advocate,
      thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb,
      Jesus, O merciful, O loving, O sweet Virgin Mary! <br><br>Amen.`,
      paragraph2: 'Hail, Holy Queen',
      paragraph3: 'Hail, Holy Queen'
    },
    {
      id: 9,
      prayerName: 'Hail Mary',
      paragraph1: `Hail Mary,<br>
      Full of Grace,<br>
      The Lord is with thee.<br>
      Blessed art thou among women,<br>
      and blessed is the fruit<br>
      of thy womb, Jesus.<br><br>
      Holy Mary,<br>
      Mother of God,<br>
      pray for us sinners now,<br>
      and at the hour of our death.<br>Amen.`,
      paragraph2: 'Hail Mary',
      paragraph3: 'Hail Mary'
    },
    {
      id: 10,
      prayerName: 'The Memorare',
      paragraph1: `Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection,
      implored thy help, or sought thine intercession was left unaided.<br><br>

      Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother;
      to thee do I come, before thee I stand, sinful and sorrowful.
      O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me.<br><br>

      Amen.`,
      paragraph2: 'The Memorare',
      paragraph3: 'The Memorare'
    },
    {
      id: 11,
      prayerName: 'Nicene Creed',
      paragraph1: `We believe in one God, the Father, the Almighty, Maker of heaven and earth, of all that is seen and
      unseen.<br><br>
       We believe in one Lord Jesus Christ, the only Son of God, eternally begotten of the Father; God from
      God, Light from Light, true God from true God; begotten not made, one in being with the Father.
      Through Him all things were made. For us men and for our salvation He came down from heaven. By the
      power of the Holy Spirit He was born of the Virgin Mary and became man. For our sake He was
      crucified under Pontius Pilate. He suffered, died, and was buried. On the third day He rose again, in
      fulfillment of the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He
      will come again in glory to judge the living and the dead, and His kingdom will have no end.<br><br>
       We believe in the Holy Spirit, the Lord, the Giver of life, who proceeds from the Father and the Son.
      With the Father and the Son He is worshipped and glorified. He has spoken through the prophets.<br><br>
       We believe in one, holy, catholic, and apostolic Church. We acknowledge one baptism for the
      forgiveness of sins. We look for the resurrection of the dead and the life of the world to come. <br><br>

      Amen.`,
      paragraph2: 'Nicene Creed',
      paragraph3: 'Nicene Creed'
    },
    {
      id: 12,
      prayerName: 'The Our Father',
      paragraph1: `Our Father, Who art in heaven,<br>
      Hallowed be Thy Name.<br>
      Thy Kingdom come.<br>
      Thy Will be done,<br>
      on earth as it is in Heaven.<br>

      Give us this day our daily bread.<br>
      And forgive us our trespasses,<br>
      as we forgive those who trespass against us.<br>
      And lead us not into temptation,<br>
      but deliver us from evil.<br><br>

      Amen.`,
      paragraph2: 'The Our Father',
      paragraph3: 'The Our Father'
    },
    {
      id: 13,
      prayerName: 'Prayer Before Meals',
      paragraph1: `Bless us, O Lord, and these your gifts<br>
      which we are about to receive from your goodness.<br>
      Through Christ our Lord.<br><br>
      Amen.`,
      paragraph2: 'Prayer Before Meals',
      paragraph3: 'Prayer Before Meals'
    },
    {
      id: 14,
      prayerName: 'Prayer Before Meals',
      paragraph1: `Bless us, O Lord, and these your gifts<br>
      which we are about to receive from your goodness.<br>
      Through Christ our Lord.<br><br>
      Amen.`,
      paragraph2: 'Prayer Before Meals',
      paragraph3: 'Prayer Before Meals'
    },
    {
      id: 15,
      prayerName: 'Prayer After Meals',
      paragraph1: `We give you thanks<br>
      for all your gifts,<br>
      almighty God,<br>
      living and reigning<br>
      now and for ever.<br><br>
      Amen.`,
      paragraph2: 'Prayer After Meals',
      paragraph3: 'Prayer After Meals'
    },
    {
      id: 16,
      prayerName: 'Prayer for Families',
      paragraph1: `God, Our Father, loving and merciful, bring together and keep all families in perfect
      unity of love and mutual support. Instill in each member the spirit of understanding
      and affection for each other. Keep quarrels and bitterness far from them, and for
      their occasional failures instill forgiveness and peace. May the mutual love and
      affection of parents set a good example. Instill in children self-respect that they may
      respect others and grow in mature independence. May the mutual affection and
      respect of families be a sign of Christian life here and hereafter, through Jesus
      Christ, our Lord and Savior. <br><br>
      Amen.`,
      paragraph2: 'Prayer for Families',
      paragraph3: 'Prayer for Families'
    },
    {
      id: 17,
      prayerName: 'Guardian Angel Prayer',
      paragraph1: `Angel of God, my guardian dear,<br>
      to whom God's love commits me here,<br>
      ever this day be at my side,<br>
      to light and guard, to rule and guide.<br><br>
      Amen.`,
      paragraph2: 'Guardian Angel Prayer',
      paragraph3: 'Guardian Angel Prayer'
    },
];

  constructor() { }

  getPrayer(id: number): Prayer {
    return this.PRAYERS[id];
  }


  getPrayerList(): Prayer[] {
    return this.PRAYERS;
  }
}
