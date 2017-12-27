import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationPractice1Component } from './common/animation-practice-1.component';

const routes: Routes = [
  {path:'ap1', component: AnimationPractice1Component},
  {path:'', redirectTo: '/ap1', pathMatch:'full'},
  {path:'**', redirectTo: '/ap1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
