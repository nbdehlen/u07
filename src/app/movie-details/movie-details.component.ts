import { Component, OnInit } from "@angular/core";
import { DetailsService } from "../details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}
  details;
  endpoint = "/movie/";

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.handleId(id, this.endpoint);
  }

  handleId = (id, endpoint) => {
    this.detailsService.getId(id, endpoint).subscribe(data => {
      this.details = data;
      console.log(id);
      console.log(this.details);
    });
  };
}
