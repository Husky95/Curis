import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
  trigger : boolean = false
  ngOnInit(): void {
  }
  onTry(){
    this.trigger = true
  }
  onBack(){
    this.trigger = false
  }

}