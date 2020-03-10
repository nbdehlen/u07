import { Component, OnInit } from "@angular/core";
import { DetailsService } from "../details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  constructor(
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) {}
  details;

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.handleId(id);
  }

  handleId = id => {
    this.detailsService.getId(id).subscribe(data => {
      this.details = data;
      console.log(id);
      console.log(this.details);
    });
  };
}
