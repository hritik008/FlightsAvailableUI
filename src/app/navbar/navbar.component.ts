import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightAvailableComponent } from '../flight-available/flight-available.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(FlightAvailableComponent,{static:true}) child! : FlightAvailableComponent;
  public isActive:any;
  selected(value:any){
    this.isActive = value;
    this.child.sortJson(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
