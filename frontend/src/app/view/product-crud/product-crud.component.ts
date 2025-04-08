import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../component/template/header/header.service';
import {MatButtonModule} from '@angular/material/button';
import { ProductCreateComponent } from '../../component/product/product-create/product-create.component';
@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [MatButtonModule, ProductCreateComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css',
})
export class ProductCrudComponent {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Product Registration',
      icon: 'storefront',
      routerUrl: '/products',
    };
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products']);
  }
}
