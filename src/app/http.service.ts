import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PREFIXED_KEY } from "api_key";

/* API Endpoints */
const TMDB = {
  base_url: "https://api.themoviedb.org/3",
  query: "?query=",
  trending: "/trending/movie/week"
};

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getBeer() {
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }

  getTrending() {
    return this.http.get(TMDB.base_url + TMDB.trending + PREFIXED_KEY);
  }
}
