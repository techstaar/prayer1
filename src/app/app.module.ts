import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrayerDetailsComponent } from './prayer-details/prayer-details.component';
import { PrayerListComponent } from './prayer-list/prayer-list.component';
import { PrayerHomeComponent } from './prayer-home/prayer-home.component';
import { PrayerWordofgodComponent } from './prayer-wordofgod/prayer-wordofgod.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PrayerDetailsComponent,
    PrayerListComponent,
    PrayerHomeComponent,
    PrayerWordofgodComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
