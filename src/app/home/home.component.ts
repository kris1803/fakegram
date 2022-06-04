import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faHeart = faHeart;

  constructor() { 
    console.log('HomeComponent');
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}
