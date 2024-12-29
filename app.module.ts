import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AgePipe } from './age.pipe';
import { AgeFromYMDPipe } from './age-from-ymd.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes=[
 // {path:"",redirectTo:"Home",pathMatch:'full'},

 {path:" ",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Product",component:ProductComponent},
  {path:"Parent",component:ParentComponent},
  {path:"**",component:PageNotFoundComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ProductComponent,
    // AgePipe,
    // AgeFromYMDPipe,
    // ParentComponent,
    ChildComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  //bootstrap: [ParentComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
