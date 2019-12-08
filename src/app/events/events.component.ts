import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
  }

  openEvent() {
    window.open("https://www.facebook.com/events/529581850946217/", "_blank");
  }

}
