import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/services/search.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  invalidSearch = false;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  search(formValues) {
    this.searchService.search(formValues.search)
        .subscribe(result => {
          // if (!result) {
          //   this.invalidSearch = true;
          // } else {
            //display search results
            console.log("result", result);
          // }
        });
  }

}
