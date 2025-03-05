import { Product } from './Product';

export class ProductCatalog {
    private readonly products: Map<string, Product>;

    constructor(products: Product[]) {
        this.products = new Map(products.map(p => [p.sku, p]));
    }

    getProduct(sku: string): Product | undefined {
        return this.products.get(sku);
    }

    getPrice(sku: string): number {
        return this.products.get(sku)?.price || 0;
    }
}