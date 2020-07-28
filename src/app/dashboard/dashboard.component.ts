import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];

  activeItem: MenuItem;

  links = [
    {label: 'Home', link: './home'},
    {label: 'Calendar', link: './data'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
  ];
  activeLink = this.links[0];
  background: ThemePalette = 'primary';


  constructor() { }

  ngOnInit(): void {

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    this.activeItem = this.items[0];
  }




}
