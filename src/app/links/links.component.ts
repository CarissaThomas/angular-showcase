import { Component, OnInit, ElementRef } from '@angular/core';
import { links } from '../data/links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links: any[]; 
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
    this.links = links;
  }

  goToLink(link) {
    window.open(link, "_blank");
  }

}
