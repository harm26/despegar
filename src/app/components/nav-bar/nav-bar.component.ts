import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  hd(){
  console.log("hola")
  
  };

  hdd(){
    console.log("hola2")
    
    };

    hddd(){
      console.log("hola3")
      
      };

  constructor() { }

  ngOnInit(): void {
  }

}
