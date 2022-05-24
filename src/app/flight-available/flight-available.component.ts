import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-flight-available',
  templateUrl: './flight-available.component.html',
  styleUrls: ['./flight-available.component.css']
})
export class FlightAvailableComponent {

  flightAvailable = [
    {
      sno:'1',
      logo: 'vistaraLogo.jpg',
      flightName: 'Vistara',
      currentSmall: 'DEL',
      currentLong: 'New Delhi, India',
      departure: '17:45',
      duration: '2h 20m',
      destSmall: 'BOM',
      destLong: 'Mumbai, India',
      arrival: '20:05',
      ticketCost: '₹6253',
      emiCost: '₹2085'
    },
    {
      sno:'2',
      logo: 'spiceJetLogo.png',
      flightName: 'Spicejet',
      currentSmall: 'DEL',
      currentLong: 'New Delhi, India',
      departure: '18:35',
      duration: '2h 15m',
      destSmall: 'BOM',
      destLong: 'Mumbai, India',
      arrival: '20:50',
      ticketCost: '₹7776',
      emiCost: '₹2592'
    },
    {
      sno:'3',
      logo: 'spiceJetLogo.png',
      flightName: 'Spicejet',
      currentSmall: 'DEL',
      currentLong: 'New Delhi, India',
      departure: '19:45',
      duration: '2h 20m',
      destSmall: 'BOM',
      destLong: 'Mumbai, India',
      arrival: '22:05',
      ticketCost: '₹7776',
      emiCost: '₹2592'
    }
  ];
  public ord:any;
  sortJson(value:number){
    this.ord=!this.ord;
    if(value==1){
      let asc = this.ord?-1:1;
      this.flightAvailable.sort(function (a,b){
        if(a.departure<b.departure){
          return -1*asc;
        }
        else if(a.departure>b.departure){
          return 1*asc;
        }
        else return 0;
      });
    }
    if(value==2){
      let asc = this.ord?-1:1;
      this.flightAvailable.sort(function (a,b){
        if(a.duration<b.duration){
          return -1*asc;
        }
        else if(a.duration>b.duration){
          return 1*asc;
        }
        else return 0;
      });
    }
    if(value==3){
      let asc = this.ord?-1:1;
      this.flightAvailable.sort(function (a,b){
        if(a.arrival<b.arrival){
          return -1*asc;
        }
        else if(a.arrival>b.arrival){
          return 1*asc;
        }
        else return 0;
      });
    }
    if(value==4){
      let asc = this.ord?-1:1;
      this.flightAvailable.sort(function (a,b){
        if(a.ticketCost<b.ticketCost){
          return -1*asc;
        }
        else if(a.ticketCost>b.ticketCost){
          return 1*asc;
        }
        else return 0;
      });
    }
  }
  constructor(private modalService: NgbModal) { }
  openModal(id:any){
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.selectedFlight = this.flightAvailable[id-1];
  }
  

  ngOnInit(): void {
  }

}
