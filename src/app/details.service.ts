import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PREFIXED_KEY } from "api_key";

@Injectable({
  providedIn: "root"
})
export class DetailsService {
  baseUrl = "https://api.themoviedb.org/3";
  adult = "&include_adult=false";

  constructor(private http: HttpClient) {}

  getId(id: string, endpoint: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + endpoint + id + PREFIXED_KEY + this.adult
    );
  }

  getCred(id: string, endpoint: string, credits: string): Observable<any> {
    return this.http.get<any>(
      this.baseUrl + endpoint + id + credits + PREFIXED_KEY + this.adult
    );
  }
}
