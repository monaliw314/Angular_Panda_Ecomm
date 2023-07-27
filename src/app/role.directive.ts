import { Directive, ElementRef } from '@angular/core';
import { SharedService } from './shared.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  constructor(private _sharedService : SharedService,private elementRef: ElementRef) { }

  ngOnInit(){
    const role = this._sharedService.isrole;
    if(role!=='admin'){
      this.elementRef.nativeElement.remove();
    }
   
  }

}
