import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

    activetab: string = "home";

    constructor() { }

    ngOnInit() { }

    getActiveTab(tabname: string) 
    {
      this.activetab = tabname;
    }

}
