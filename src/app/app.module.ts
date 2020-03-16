import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImdbApiService } from './imdb-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ImdbApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
