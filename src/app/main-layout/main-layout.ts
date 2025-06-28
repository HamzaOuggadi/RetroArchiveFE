import { Component } from '@angular/core';
import {Sidebar} from './sidebar/sidebar';
import {RouterOutlet} from '@angular/router';
import {ContactUs} from '../contact-us/contact-us';

@Component({
  selector: 'app-main-layout',
  imports: [
    Sidebar,
    RouterOutlet,
    ContactUs
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
