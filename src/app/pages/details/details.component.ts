import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products/products.service';
import { Iproduct } from '../../shared/interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);

  detailsProduct: Iproduct = {} as Iproduct;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        let productId = p.get('id');

        this.productsService.getSpecificProduct(productId).subscribe({
          next: (res) => {
            console.log(res.data);
            this.detailsProduct = res.data;
          },
          error: (err) => {
            console.log(err);
          }
        })

      }
    });


  }

}
