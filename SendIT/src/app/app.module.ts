import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { NavbarComponent } from './components/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    FilterPipe,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgxSpinnerModule,

    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
