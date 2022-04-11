import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product, products } from 'src/app/product';
import { ProductsService } from 'src/app/sevices/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: any;
  products: products = {
    currentPage: "",
    hasNextPage: false,
    hasPreviousPage: false,
    lastPage: "",
    nextPage: "",
    previousPage: "",
    products: []
  };
  constructor(private productService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.page = this.route.snapshot.paramMap.get('page');
      this.productService.getProducts(+this.page).subscribe((products: products) => {
        this.products = products
      });
    });
  }

}
