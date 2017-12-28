import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationPractice1Component } from './common/animation-practice-1.component';
import { SpinPracticeComponent } from './common/spin-practice.component';

const routes: Routes = [
  {path:'ap1', component: AnimationPractice1Component},
  {path:'spin', component: SpinPracticeComponent},  
  {path:'**', redirectTo: '/ap1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
