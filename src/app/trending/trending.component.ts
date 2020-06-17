import { Component, OnInit } from "@angular/core";
import { listService } from "../list.service";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"]
})
export class TrendingComponent implements OnInit {
  movies;

  constructor(private _http: listService) {}

  ngOnInit() {
    this._http.getTrending().subscribe(data => {
      this.movies = data;
    });
  }
}
