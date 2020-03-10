import { Component, OnInit } from "@angular/core";
import { ListService } from "../list.service";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"]
})
export class TrendingComponent implements OnInit {
  movies;

  constructor(private _http: ListService) {}

  ngOnInit() {
    this._http.getTrending().subscribe(data => {
      this.movies = data;
    });
  }
}
