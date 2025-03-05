import { ProductCatalog } from '../../src/core/models/ProductCatalog';
import { Product } from '../../src/core/models/Product';

describe('ProductCatalog', () => {
    const products = [
        new Product('p1', 'Product 1', 100),
        new Product('p2', 'Product 2', 200)
    ];

    test('should return correct product', () => {
        const catalog = new ProductCatalog(products);
        expect(catalog.getProduct('p1')?.price).toBe(100);
        expect(catalog.getProduct('invalid')).toBeUndefined();
    });

    test('should return correct price', () => {
        const catalog = new ProductCatalog(products);
        expect(catalog.getPrice('p2')).toBe(200);
        expect(catalog.getPrice('invalid')).toBe(0);
    });
});