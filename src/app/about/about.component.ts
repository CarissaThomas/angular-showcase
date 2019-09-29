import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public typewriter_text: string = "About us coming soon - we take this seriously :)";
  public typewriter_display: string = "";
  public mobile: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.typingCallback(this);
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';

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
