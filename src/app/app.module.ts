import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AnimationPractice1Component } from './common/animation-practice-1.component';
import { PersonService } from './common/person.service';
import { SpinPracticeComponent } from './common/spin-practice.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimationPractice1Component,
    SpinPracticeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
