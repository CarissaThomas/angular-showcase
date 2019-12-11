import { Component } from '@angular/core';
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

  constructor(public router: Router){
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        this.getImageLocation();
      }
    });
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
        this.isImageDisplayed = false;
         break; 
      } 

      case '/': { 
        this.isImageDisplayed = false;
         break; 
      } 

      case '/links': { 
        this.imageSrc = "../../assets/moduleImages/linkicon.png";
        this.isImageDisplayed = true;
         break; 
      } 

      case '/recordlabel': { 
        this.imageSrc = "../../assets/moduleImages/record-label.png";
        this.isImageDisplayed = true;
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

}


