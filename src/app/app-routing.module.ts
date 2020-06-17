import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TrendingComponent } from "./trending/trending.component";
import { SearchComponent } from "./search/search.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { TvDetailsComponent } from "./tv-details/tv-details.component";
import { PersonDetailsComponent } from "./person-details/person-details.component";

const routes: Routes = [
  { path: "", component: TrendingComponent },
  { path: "search", component: SearchComponent },
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "tv/:id", component: TvDetailsComponent },
  { path: "person/:id", component: PersonDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
