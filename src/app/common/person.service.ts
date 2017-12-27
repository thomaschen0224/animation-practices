import { Injectable } from '@angular/core';

@Injectable()
export class PersonService {

  name:string;
  state:string = 'inactive';

  constructor() { }


  toggleState(){
    this.state = this.state === 'active' ? 'inactive':'active';
  }



}
