import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

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
