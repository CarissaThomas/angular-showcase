import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  selectedPhotos: string[]
  
  constructor() { }

   
  
  setSelectedPhotos(selectedPhotos){
    this.selectedPhotos = selectedPhotos;
  }


}
