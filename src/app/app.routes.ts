import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  { path: 'not-found', component: NotFoundComponent }, 
  { path: '**', redirectTo: 'not-found' } 
];
