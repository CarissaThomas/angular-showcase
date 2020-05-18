import { Component, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  title = 'Flight PDX';
  imageSrc: string;
  isImageDisplayed: boolean;

  constructor(public router: Router, private elementRef: ElementRef){
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.getImageLocation();
      }
    });

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
  }

  getImageLocation() {
    switch(this.router.url) { 
      case '/events': { 
        this.imageSrc = "../../assets/moduleImages/EventsLogo.png";
        this.isImageDisplayed = true;
         break; 
      } 

      case '/about': { 
        this.imageSrc = "../../assets/moduleImages/pressedoutsmilie.png";
        this.isImageDisplayed = true;
         break; 
      } 

      case '/artists': { 
        this.imageSrc = "";
        this.isImageDisplayed = false;
         break; 
      } 

      case '/': { 
        this.imageSrc = "";
        this.isImageDisplayed = false;
         break; 
      } 

      case '/links': { 
        this.imageSrc = "../../assets/moduleImages/linkicon.png";
        this.isImageDisplayed = true;
         break; 
      } 

      case '/label-links': { 
        this.imageSrc = "../../assets/moduleImages/linkicon.png";
        this.isImageDisplayed = true;
         break; 
      } 

      case '/recordlabel': { 
        this.imageSrc = "../../assets/moduleImages/record-label.png";
        this.isImageDisplayed = true;
         break; 
      }

      case '/photos': { 
        this.imageSrc = "";
        this.isImageDisplayed = false;
         break; 
      }
      
      
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

}


