import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../component/template/header/header.service';
@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [],
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
