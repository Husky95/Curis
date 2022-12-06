import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //const myInterval = setInterval(this.getInsurance, 500);
    this.getInsurance()


  }
  getInsurance(){
    var frame = (document.getElementById('iframe')) as HTMLIFrameElement
    console.log(window)
    var div = document.querySelector('#iframe');
    if(div != null){
      var pCount = div.querySelectorAll('document');
      //console.log(div)

    }


  }

}
