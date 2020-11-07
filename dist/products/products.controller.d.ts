import { ProductsService } from './products.service';
interface ProductDto {
    id: string;
    name: string;
}
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(): {
        id: number;
        name: string;
    }[];
    getProduct(params: any): {
        id: number;
        name: string;
    }[];
    createProduct(product: ProductDto): void;
    updateProduct(product: ProductDto): void;
    deleteProduct(product: ProductDto): void;
}
export {};
