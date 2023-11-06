import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/prod';
import { ProducutsService } from 'src/app/shared/service/producuts.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
   proId ! : number;
   proObj  !: Iproduct
   qp !: string
  constructor( private _activate : ActivatedRoute,
       private _service : ProducutsService,
       private _rout : Router
    ) { }

  ngOnInit(): void {
     
      this._activate.params
             .subscribe(
              (id : Params) => {
                console.log(id)
                this.proId = +id['id']
              }   
             )
     this.proObj =  this._service.getsingleproduct(this.proId)! 
           
     this._activate.queryParams
                .subscribe(
                  (qp:Params) =>{
                    console.log(qp);
                  this.qp = qp['canEdit']
                  }
                )
            

  }




  updateuser(pname:HTMLInputElement,pid:HTMLInputElement, pstatus:HTMLInputElement){
            let obj  = {
               pname : pname.value,
               pid : this.proId,
               pstatus : this.proObj.pstatus,
               userRole :  this.proObj.userRole

            }

       this._service.updateProduct(obj)
       this._rout.navigate(['products'])
   
  }

}
