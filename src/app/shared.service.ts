import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isAuthenticated! : boolean;
  isrole! : string;

  constructor() { }

  private data : any = {};

  sendData(data:any){
    this.data = data;
    console.log(this.data)
  }

  getData(){
    return this.data;
  }
}
