import { Component, OnInit, ElementRef } from '@angular/core';
import { Artists } from '../models/artists';
import { artists } from '../data/artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  selectedArtist: Artists;
  artists: Artists[];

  constructor(private elementRef: ElementRef) {
    this.artists = artists;
   }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
  }

  
  onSelect(artist: Artists): void {
  this.selectedArtist = artist;
  }


}
