import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products = [{
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

  getProducts() {
    return this.products;
  }

  createProduct(product) {
      console.log(">>>>>>>>>>>>>>>>>",product);
    this.products = [...this.products, {...product}];
    return this.products;
  }

  updateProduct(product) {
    this.products = this.products.map(p => {
      if (p.id == product.id) {
        return { ...product};
      }
      return p;
    });
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id != id);
  }
}
