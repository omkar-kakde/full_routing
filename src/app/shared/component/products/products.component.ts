import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/prod';
import { ProducutsService } from '../../service/producuts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  [x: string]: any;

  constructor(private _service : ProducutsService) { }
   productData ! : Array<Iproduct>;
   ngOnInit(): void {
    this.getProductData()
  }
  
 getProductData(){
    this.productData  = this._service.AllProductData()
 }

}


