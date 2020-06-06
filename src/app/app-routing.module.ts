import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayerDetailsComponent } from './prayer-details/prayer-details.component';
import { PrayerListComponent } from './prayer-list/prayer-list.component';
import { PrayerHomeComponent } from './prayer-home/prayer-home.component';
import { PrayerWordofgodComponent } from './prayer-wordofgod/prayer-wordofgod.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PrayerHomeComponent },
  { path: 'prayers', component: PrayerListComponent },
  { path: 'details/:id', component: PrayerDetailsComponent },
  { path: 'wordofgod', component: PrayerWordofgodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
