System.register(['@angular/core', './product.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_service_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(productService) {
                    this.productService = productService;
                }
                //mode: 'Observable';
                ProductListComponent.prototype.ngOnInit = function () {
                    this.getProducts();
                };
                ProductListComponent.prototype.getProducts = function () {
                    var _this = this;
                    this.products = null;
                    this.productService.GetProducts().subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        selector: 'product-list',
                        template: "\n<button (click)=\"getProducts()\">Y\u00FCkle</button>\n<div *ngIf!=\"products\">veri y\u00FCkleniyor...</div>\n<div *ngIf=\"products\">\n    <ul>\n        <li *ngFor=\"let product of products\">\n            {{product.value}}\n        </li>\n    </ul>\n</div>\n",
                        providers: [product_service_1.ProductService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map