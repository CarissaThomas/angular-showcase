import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ArtistsComponent } from './artists/artists.component';
import { RecordLabelComponent } from './record-label/record-label.component';
import { LinksComponent } from './links/links.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PhotosComponent } from './photos/photos.component';

import { PhotosService } from "./photos/photos.service";
import { RecordLabelLinksComponent } from './record-label-links/record-label-links.component';

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
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'label-links',
    component: RecordLabelLinksComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    EventsComponent,
    ArtistsComponent,
    RecordLabelComponent,
    LinksComponent,
    PhotosComponent,
    RecordLabelLinksComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgxGalleryModule
  ],
  providers: [
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
