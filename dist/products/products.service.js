"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [{
                id: 1,
                name: 'Car'
            },
            {
                id: 2,
                name: 'Bus'
            },
            {
                id: 3,
                name: 'Jeep'
            }
        ];
    }
    getProducts() {
        return this.products;
    }
    createProduct(product) {
        console.log(">>>>>>>>>>>>>>>>>", product);
        this.products = [...this.products, Object.assign({}, product)];
        return this.products;
    }
    updateProduct(product) {
        this.products = this.products.map(p => {
            if (p.id == product.id) {
                return Object.assign({}, product);
            }
            return p;
        });
    }
    deleteProduct(id) {
        this.products = this.products.filter(p => p.id != id);
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map