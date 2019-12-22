import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PhotosService } from "../photos/photos.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  selectedPhotos: string[];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];


  // this.galleryImages = [
  //     {
  //         small: "https://lh3.googleusercontent.com/EanCu_-o4o3H3aHQIMYGhyAjqILZ4v20Yo5ouMPu3gjeMfKwcg5cg1bjWOOc0d3lWynGTctspuwmpnAX6RSCbSyw_r6aseGIaV2sHnCqlT6O5yVEsQ-diM1LjSVDIMnxUEK_YTV2-g=w1920-h1080",
  //         medium: "https://lh3.googleusercontent.com/EanCu_-o4o3H3aHQIMYGhyAjqILZ4v20Yo5ouMPu3gjeMfKwcg5cg1bjWOOc0d3lWynGTctspuwmpnAX6RSCbSyw_r6aseGIaV2sHnCqlT6O5yVEsQ-diM1LjSVDIMnxUEK_YTV2-g=w1920-h1080",
  //         big: "https://lh3.googleusercontent.com/EanCu_-o4o3H3aHQIMYGhyAjqILZ4v20Yo5ouMPu3gjeMfKwcg5cg1bjWOOc0d3lWynGTctspuwmpnAX6RSCbSyw_r6aseGIaV2sHnCqlT6O5yVEsQ-diM1LjSVDIMnxUEK_YTV2-g=w1920-h1080"
  //     }
  //   ];
  }

  setGalleryPhotos() {
    this.photosService.selectedPhotos.forEach(photo => {
      this.galleryImages.push(
        {
          small: photo,
          medium: photo,
          big: photo
        }
      );
    });
    
  }

}
