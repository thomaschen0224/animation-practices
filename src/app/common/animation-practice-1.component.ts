import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";


@Component({
  selector: 'app-animation-practice-1',
  templateUrl: './animation-practice-1.component.html',
  styleUrls: ['./animation-practice-1.component.css'],
  animations: [trigger('flyInOut', [
    state('in', style({width: '*'})),        
    transition('void => *', [style({width: '0'}), animate(500)]),
    transition('* => void', animate(100,style({transform:'translateX(100%)'})))
  ])]
})
export class AnimationPractice1Component implements OnInit {


  
  state:string='in';
  showUserName:boolean=true;
  showPassword:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onKeyUp(event:KeyboardEvent){    
    if(event.key === 'Enter'){
      console.log(event);    
      this.showUserName = false;  
    }
    
  }
  
  animationDone(){
    if(!this.showUserName) {
      this.showPassword=true;
    }
    

  }



}
