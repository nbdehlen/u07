import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PREFIXED_KEY } from "api_key";

@Injectable({
  providedIn: "root"
})
export class ListService {
  base_url = "https://api.themoviedb.org/3";
  trending = "/trending/movie/week";

  constructor(private http: HttpClient) {}

  getTrending(): Observable<any> {
    return this.http.get(this.base_url + this.trending + PREFIXED_KEY);
  }
}
