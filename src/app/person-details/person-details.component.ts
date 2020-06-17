import { Component, OnInit } from "@angular/core";
import { DetailsService } from "../details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.scss"],
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
    this.getDetails(id, this.endpoint);
  }

  getDetails = (id, endpoint) => {
    this.detailsService.getId(id, endpoint).subscribe((data) => {
      this.details = data;
      console.log(id);
      console.log(this.details);

      if (!this.details.birthday) {
        this.details.birthday = "Unknown";
      }

      this.details.gender = this.genderToString(this.details.gender);
    });
  };

  genderToString(gender) {
    if (gender == 0) {
      return (gender = "Unknown");
    } else if (gender == 1) {
      return (gender = "Female");
    } else if (gender == 2) {
      return (gender = "Male");
    }
  }
}
