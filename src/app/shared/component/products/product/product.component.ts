import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct, Tpstatus } from 'src/app/shared/models/prod';
import { ProducutsService } from 'src/app/shared/service/producuts.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   prodId !: number;
   prodObj  !: Iproduct;
  constructor(private _rout : ActivatedRoute ,
     private _service : ProducutsService,
     private _router : Router
     ) { }

  ngOnInit(): void {
    this._rout.params
          .subscribe((res: Params)=>{
            this.prodId = +res['id']
            console.log(this.prodId)
          })

          this.prodObj = this._service.getsingleproduct(this.prodId)!
          console.log(this.prodObj)
     
   
  }



  onedit(){
     this._router.navigate(['products', this.prodId, 'edit'],
       { queryParamsHandling : 'preserve'}
     )
  }

};
