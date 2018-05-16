import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule,Router } from '@angular/router';
import {HomeComponent} from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public router:Router){

  }
  gotoProfile(){
    console.log('In routing method');
    this.router.navigate(['/home']);
  }
  gotoAbout(){
    this.router.navigate(['/about']);
  }
}
