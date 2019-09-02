import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-record-label',
  templateUrl: './record-label.component.html',
  styleUrls: ['./record-label.component.scss']
})
export class RecordLabelComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#1B1B1D';
  }

}
