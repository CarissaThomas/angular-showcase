import { Component, OnInit, ElementRef } from '@angular/core';
import { Photos } from "../data/photos";
import { PhotosService } from "../photos/photos.service";
import { Router } from '@angular/router';
import { Events } from "../data/events";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  photos: object;
  events: object[]; 

  constructor(private elementRef: ElementRef, private router: Router, private photosService: PhotosService) {
    this.photos = Photos;
    this.events = Events;
   }

  ngOnInit() {



  }

  openPhotos(photoSelection) {
    var keys = Object.keys(this.photos); //get keys from object as an array

    for (let index = 0; index < keys.length; index++) {
      const photo = keys[index];

      if (photoSelection == photo) {
        const photo = keys[index];
        this.photosService.setSelectedPhotos(this.photos[photo]);
        this.router.navigate(['/photos']);
      }
    };

  }



}
