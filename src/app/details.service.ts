import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PREFIXED_KEY } from "api_key";

@Injectable({
  providedIn: "root"
})
export class DetailsService {
  baseUrl = "https://api.themoviedb.org/3";
  endpoint = "/movie/";
  adult = "&include_adult=false";

  constructor(private http: HttpClient) {}

  getId(id): any {
    //Observable<any> {
    return this.http.get<any>(
      this.baseUrl + this.endpoint + id + PREFIXED_KEY + this.adult
    );
  }
}
