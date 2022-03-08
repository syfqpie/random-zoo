import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PublicRoutes } from './public.routing';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    RouterModule.forChild(PublicRoutes)
  ]
})
export class PublicModule { }
