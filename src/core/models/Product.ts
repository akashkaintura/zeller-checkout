// Product.ts
import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
    constructor(
        public readonly sku: string,
        public readonly name: string,
        public readonly price: number
    ) { }
}

// ProductCatalog.ts
