import { Injectable, OnInit } from '@angular/core';
import {  Iproduct } from '../models/prod';

@Injectable({
  providedIn: 'root'
})
export class ProducutsService implements OnInit{
   obj : string = '';

  constructor() { }
  ngOnInit(): void {
   
  }
  productArray : Array<Iproduct>=[
    {
      pname:"samsung",
      pid:1,
      pstatus: "In progress",
      userRole : 'Admin'

    },
    {
      pname:"Lava",
      pid:2,
      pstatus: "dispatched",
      userRole : 'user'

    },
    {
      pname:"Iphone14",
      pid:3,
      pstatus: "Deliverd",
      userRole : 'Admin'

    }
  ]

AllProductData():Array<Iproduct>{
    return this.productArray;
 
}
  
getsingleproduct(id:number){
   return this.productArray.find(prod => prod.pid === id)
}

updateProduct(obj:Iproduct){
 this.productArray.forEach((ele)=>{
  if(ele.pid === obj.pid){
    ele.pname = obj.pname,
    ele.pstatus = obj.pstatus,
    ele.userRole = obj.userRole
  }
})
}

}; 













