import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  page: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.route.snapshot.paramMap.get('page') ?? 1;
  }

}
