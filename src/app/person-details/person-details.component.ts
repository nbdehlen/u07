import { Component, OnInit } from "@angular/core";
import { DetailsService } from "../details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.scss"]
})
export class PersonDetailsComponent implements OnInit {
  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}
  details;
  endpoint = "/person/";

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
