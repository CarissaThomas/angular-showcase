import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { mixesComponent } from './mixes/mixes.component';
import { EventsComponent } from './events/events.component';
import { ArtistsComponent } from './artists/artists.component';
import { RecordLabelComponent } from './record-label/record-label.component';
import { LinksComponent } from './links/links.component';


const routes: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mixes',
    component: mixesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'recordlabel',
    component: RecordLabelComponent
  },
  {
    path: 'links',
    component: LinksComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    mixesComponent,
    EventsComponent,
    ArtistsComponent,
    RecordLabelComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
