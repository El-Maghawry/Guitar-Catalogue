import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-guitar-button',
  templateUrl: './favourite-guitar-button.component.html',
  styleUrls: ['./favourite-guitar-button.component.css']
})
export class FavouriteGuitarButtonComponent implements OnInit {

  @Input() guitarId: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onFavoriteClick(): void {
    // add the guitar to the favourites
    alert(this.guitarId)
  }

}
