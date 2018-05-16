import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule,Router } from '@angular/router';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { LocationStrategy } from '@angular/common';
import {AboutUsComponent} from './about-us/about-us.component';
import {CotactUsComponent} from './cotact-us/cotact-us.component';
import {CareerComponent} from './career/career.component';
const appRoutes: Routes = [ 
  { path: 'home', component: HomeComponent }
 
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CotactUsComponent,
    CareerComponent
    
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    routing,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }
