import { Component } from '@angular/core';
import { Product } from 'src/Model/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductService]
})
export class ProductsComponent {
  listpro?:Product[];
  constructor(private ProductService:ProductService) {
    this.ProductService.getAllProducts().then((housingLocationList: Product[]) => {
      this.listpro = housingLocationList;
      // this.filteredLocationList = housingLocationList;
      console.log(this.listpro);
    });

  }
}
