import { Component, OnInit, ElementRef } from '@angular/core';
import { Artists } from '../models/artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artists[] = [
    { id: 1, 
      name: 'Carissa illy',
      bio: 'Carissa illy is an Acid House DJ hailing from the cold mountains of Boulder, Colorado.  She has lived and played in Washington, Los Angeles, Italy, and now Portland.  Carissa is on her way up with production and mixes that have begun to make some noise in Portland.  She is here to nurture the dance scene with European ideals that encourage DJs to be represented as not only mixesians but cultural vanguards.  She believes that Portland deserves the best and she is here to deliver.  ',
      image: 'carissabio.jpeg',
      subtitle: 'Acid House',
      soundcloud:'carissailly',
      instagram: 'carissa_illy'
    },
    { id: 2, 
      name: 'Art Of Hot',
      bio: "Chris Demetras, AKA Art Of Hot, is a seasoned, west coast dance mixes producer/ and DJ. As Art Of Hot he has produced almost 170 original tracks and remixes on over 30 labels and prolific DJs such as Carl Cox , Jon Rundell and Angel Alanis have played his material. Chris caught the dance mixes bug while being very actively involved in the heady and lively San Francisco club and rave scenes of the early ‘90s. DJs like Doc Martin, Garth, Jeno, The Hardkiss Brothers and DJ Dan had a profound influence on his taste and mixes sensibilities. In fact there were times when he would find himself digging for records beside Doc Martin in the beloved, and sadly missed, BPM record store on Polk street. Chris began Djing in 1992 and within a few years mastered mixes production. He then decided to perform live and chose the project name Art Of Hot. His breakthrough came when the Art Of Hot track was released on Looq Records and subsequently licensed to Microsoft XBox’s Dance Dance Revolution Ultramix 2 compilation in 2004, DVD and Video game in Japan. In 2010 Chris moved to Portland, Oregon and continued to craft tracks that have been put out on, or licensed to, several labels. Art Of Hot’s track with Franck Valat, “Goodwill,” appeared on the compilation Minimal Club Affairs Volume 4, released on legendary German dance label ZYX, which also included productions by tech house heavy hitters such as Dirty Bird’s Worthy, Ryan Crosson of Vision Quest and German duo Andhim. But, tech house isn’t the only style in which Chris is fluent, he is also extremely adept at creating drum ‘n’ bass, electro, bass mixes and breaks. Now, firmly based in Portland, Chris and partner Jim Collier throw the popular monthly party Flight.",
      subtitle: 'House/Techno',
      image: 'art-of-hot.jpg',
      soundcloud:'artofhot-1',
      instagram: 'art_of_hot'
    }
  ];
  
  selectedArtist: Artists;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
  }

  
  onSelect(artist: Artists): void {
  this.selectedArtist = artist;
  }


}
