export declare class ProductsService {
    products: {
        id: number;
        name: string;
    }[];
    getProducts(): {
        id: number;
        name: string;
    }[];
    createProduct(product: any): {
        id: number;
        name: string;
    }[];
    updateProduct(product: any): void;
    deleteProduct(id: any): void;
}
