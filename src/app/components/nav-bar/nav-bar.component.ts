import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  hola(){
  console.log("hola")
  
  };

  hola2(){
    console.log("hola2")
    
    };

    hola3(){
      console.log("hola3")
      
      };
 

  
  constructor() { }

  ngOnInit(): void {
  }

}
