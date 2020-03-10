import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TrendingComponent } from "./trending/trending.component";
import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    SearchComponent,
    DetailsComponent
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
