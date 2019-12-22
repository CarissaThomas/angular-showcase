import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  selectedPhotos: string[]
  
  constructor() { }

   
  
  set setSelectedPhotos(selectedPhotos){
    this.selectedPhotos = selectedPhotos;
  }


}
