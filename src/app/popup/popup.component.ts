import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent{
  @Input() public selectedFlight:any;
  constructor(public activeModal: NgbActiveModal) {}

}

