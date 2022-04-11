import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: string = "";
  @Input() hasNextPage: boolean = false;
  @Input() hasPreviousPage: boolean = false;
  @Input() lastPage: string = "";
  @Input() previousPage: string = "";
  @Input() nextPage: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
