import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/Model/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  providers:[ProductService]
})
export class ProductdetailsComponent {
  productId!: number;
  productdata!:Product;

  Pname!:string;
  Pprice!:string;
  Pcategory!:string;
  Pstock!:string;

  @ViewChild('registrationform') form!:NgForm
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Your user service
  ) {};
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];

    });
    this.productService.getProductById(this.productId).then((productdata: Product) => {
      this.productdata = productdata;
      console.log(this.productdata)
      this.form.setValue({
        pname:this.productdata.name,
        pprice:this.productdata.price,
        pcategory:this.productdata.category,
        pstock:this.productdata.stock
      })
    })
  }

  onsubmitclick()
  {

  }

}
