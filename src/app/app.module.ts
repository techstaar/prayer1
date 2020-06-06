import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrayerDetailsComponent } from './prayer-details/prayer-details.component';
import { PrayerListComponent } from './prayer-list/prayer-list.component';
import { PrayerHomeComponent } from './prayer-home/prayer-home.component';
import { PrayerWordofgodComponent } from './prayer-wordofgod/prayer-wordofgod.component';

@NgModule({
  declarations: [
    AppComponent,
    PrayerDetailsComponent,
    PrayerListComponent,
    PrayerHomeComponent,
    PrayerWordofgodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
