import { Component, OnInit } from "@angular/core";
import { DetailsService } from "../details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "tv-details",
  templateUrl: "./tv-details.component.html",
  styleUrls: ["./tv-details.component.scss"]
})
export class TvDetailsComponent implements OnInit {
  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}
  details;
  endpoint = "/tv/";

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
