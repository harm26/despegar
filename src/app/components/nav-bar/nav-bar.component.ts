import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  miClase: boolean=false
  miClase2: boolean=false
  miClase3: boolean=false

  cambioClase():void{

    this.miClase = !this.miClase;
    this.miClase2 = false;
    this.miClase3 = false;
  }

  cambioClase2():void{

    this.miClase =false
    this.miClase2 =  !this.miClase;
    this.miClase3 = false;
  }

  cambioClase3():void{

    this.miClase = false;
    this.miClase2 = false;
    this.miClase3 =  !this.miClase;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}