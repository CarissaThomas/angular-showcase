import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mixes',
  templateUrl: './mixes.component.html',
  styleUrls: ['./mixes.component.scss']
})
export class mixesComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F1F1F1';
  }

}
