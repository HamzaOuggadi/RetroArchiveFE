import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
