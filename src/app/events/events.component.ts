import { Component, OnInit, ElementRef } from '@angular/core';
import { Photos } from "../data/photos";
import { PhotosService } from "../photos/photos.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  photos: object;

  constructor(private elementRef: ElementRef, private photosService: PhotosService) {
    this.photos = Photos;
   }

  ngOnInit() {



  }

  openPhotos(photoSelection) {
    var keys = Object.keys(this.photos); //get keys from object as an array

    keys.forEach(function (key) { //loop through keys array
      if (photoSelection == key) {
        this.photosService.setSelectedPhotos(this.Photos[key]);
      }
    });

  }



}
