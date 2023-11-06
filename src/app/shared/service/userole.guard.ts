import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseroleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let userDatafromroute : string = route.data['userRole']
     console.log(userDatafromroute);
     let data = localStorage.getItem('userRole')!
     console.log(data);
    if(userDatafromroute.includes(data)){
        return true
    }else{
      return false
    }  
  }
};
