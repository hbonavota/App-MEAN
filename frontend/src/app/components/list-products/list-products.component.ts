import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
 listProducts: Product[] =  [];
  constructor(private _productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallProducts()
  }
  
  getallProducts() {
    this. _productService.getProducts().subscribe(data => {
      this.listProducts = data;
    },
    error => {
      console.warn(error);
    }) 
  }
  deleteProduct(id:any){
    this._productService.deleteProduct(id).subscribe(data=>{
      this.toastr.error('The product was deleted','Product deleted')
      this.getallProducts();
    }, error => {
      console.warn(error);
    })
  }
}
