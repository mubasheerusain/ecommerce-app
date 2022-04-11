import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product: product = {
    title: "",
    imageUrl: "",
    description: "",
    price: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
