import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { YelpSearchService } from '../../yelp-search.service';

@Component({
  selector: 'app-yelpsearch',
  templateUrl: './yelpsearch.component.html',
  styleUrls: ['./yelpsearch.component.css']
})
export class YelpsearchComponent implements OnInit {
  findInfo: FormGroup;
  info = {}
  public display
  delivery: boolean;

  prices = [
    { value: 1, view: '$' },
    { value: 2, view: '$$' },
    { value: 3, view: '$$$' },
    { value: 4, view: '$$$$' }

  ]

  constructor(private fb: FormBuilder, private sService: YelpSearchService) { }

  ngOnInit() {
    this.findInfo = this.fb.group({
      city: new FormControl(),
      state: new FormControl(),
      price: new FormControl()
    })
  }

  onFindInfo(): void {
    this.sService.getSearches(this.findInfo.value.city, this.findInfo.value.state, this.findInfo.value.price).subscribe(Searches => {
      this.info = Searches;
      console.log(Searches);
      const giveMeOne = Searches.businesses[Math.floor(Math.random() * Searches.businesses.length)];
      console.log(giveMeOne.transactions)
      if (giveMeOne.is_closed === false) {
        this.display = giveMeOne;
        if (this.display.transactions.includes("delivery")) {
          this.delivery = true
        } else {
          this.delivery = false
        }
      }
      else if (giveMeOne.is_closed === true) {
        this.display = giveMeOne;
        if (giveMeOne.transactions.includes("delivery")) {
          this.delivery = true
        } else {
          this.delivery = false
        }
      }



    })
  }

}
