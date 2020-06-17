import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PREFIXED_KEY } from "api_key";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  baseUrl = "https://api.themoviedb.org/3";
  endpoint: string;
  queryPrefix = "&query=";
  adult = "&include_adult=false";

  constructor(private http: HttpClient) {}

  fetchData(query: string, searchOption: string): Observable<any> {
    switch (searchOption) {
      case "All":
        this.endpoint = "/search/multi";
        break;

      case "Movies":
        this.endpoint = "/search/movie";
        break;

      case "TV-Series":
        this.endpoint = "/search/tv";
        break;

      case "People":
        this.endpoint = "/search/person";
        break;
    }

    return this.http.get<any>(
      this.baseUrl +
        this.endpoint +
        PREFIXED_KEY +
        this.queryPrefix +
        query +
        this.adult
    );
  }
}
