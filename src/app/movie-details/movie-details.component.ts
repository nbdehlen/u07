import { Component, OnInit } from "@angular/core";
import { DetailsService } from "../details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}
  details;
  cred;
  endpoint = "/movie/";
  credits = "/credits";
  showActorsAll = false;
  actorsToggleBtn = "View All";

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.getDetails(id, this.endpoint);
    this.getCred(id, this.endpoint, this.credits);
  }

  getDetails = (id, endpoint) => {
    this.detailsService.getId(id, endpoint).subscribe((data) => {
      this.details = data;
      console.log(id);
      console.log(this.details);
    });
  };

  getCred = (id, endpoint, credits) => {
    this.detailsService.getCred(id, endpoint, credits).subscribe((cred) => {
      this.cred = cred;
      console.log(this.cred);
      console.log(this.cred.cast.length);
    });
  };

  actorsToggle() {
    this.showActorsAll == false
      ? ((this.showActorsAll = true), (this.actorsToggleBtn = "View Less"))
      : ((this.showActorsAll = false), (this.actorsToggleBtn = "View All"));
  }
}
