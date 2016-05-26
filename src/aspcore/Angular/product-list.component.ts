import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'product-list',
    template: `
<button (click)="getProducts()">Yükle</button>
<div *ngIf!="products">veri yükleniyor...</div>
<div *ngIf="products">
    <ul>
        <li *ngFor="let product of products">
            {{product.value}}
        </li>
    </ul>
</div>
`,
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    constructor(private productService: ProductService) { }

    errorMessage: string;
    products: Product[];
    //mode: 'Observable';

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.products = null;
        this.productService.GetProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        );
    }
}