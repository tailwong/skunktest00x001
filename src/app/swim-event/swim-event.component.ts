import { Component, OnInit } from '@angular/core';
import { SwEvent } from '../models/sw-event';

@Component({
  selector: 'app-swim-event',
  templateUrl: './swim-event.component.html',
  styleUrls: ['./swim-event.component.css']
})
export class SwimEventComponent implements OnInit {

  public myEvent: SwEvent = { eventName: "25Y Free", timeStdB: "16.98" };

  constructor() { 
    
  }

  ngOnInit() {
  }

}
