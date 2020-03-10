import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchInput: string;
  searches: string;
  minCharacters: number = 3;
  searchOptions = ["All", "Movies", "TV-Series", "People"];
  searchOption = this.searchOptions[0];

  constructor(private searchService: SearchService) {}

  handleSearch = () => {
    if (this.searchInput) {
      if (this.searchInput.length >= this.minCharacters) {
        this.searchService
          .getMovie(this.searchInput, this.searchOption)
          .subscribe(data => {
            this.searches = data;
            console.log(this.searchOption);
          });
      }
    }
  };

  ngOnInit() {}
}
