import { Component, OnInit, ElementRef } from '@angular/core';
import { labelLinks } from "../data/record-label-links";

@Component({
  selector: 'app-record-label-links',
  templateUrl: './record-label-links.component.html',
  styleUrls: ['./record-label-links.component.scss']
})
export class RecordLabelLinksComponent implements OnInit {
  links: any[]; 
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
    this.links = labelLinks;
  }

  goToLink(link) {
    window.open(link, "_blank");
  }

}
