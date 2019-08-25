import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public typewriter_text: string = "Pressed Out PDX has one mission: to further the dance mixes scene in Portland.  There is no doubt, Portland is changing.  This city is growing to unprecedented heights and at the beginning of this bloom we have the opportunity to shape our culture.  Pressed Out PDX is about nurturing Portland mixesal talent in order to create a dance mixes scene that will genuinely contribute to the mixes we all love.  We will be throwing our own events that feature up and coming Portland talent, as well as promoting events that push the culture in the right direction.  If you want to be involved, just show up and be yourself.  Building culture takes a village and we will be providing the mixes for you to dance to.  We believe in Portland and we know you do too. ";
  public typewriter_display: string = "";
  public mobile: boolean;

  constructor() { }

  ngOnInit() {
    this.typingCallback(this);
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
    } else {
      that.typewriter_display = "";
    }
    setTimeout(that.typingCallback, 50, that);
  }

}
