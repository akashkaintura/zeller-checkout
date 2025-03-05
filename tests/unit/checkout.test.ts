import { CheckoutService } from '../../src/core/services/CheckoutService';
import { ProductCatalog } from '../../src/core/models/ProductCatalog';
import { Product } from '../../src/core/models/Product';

describe('CheckoutService', () => {
    const products = [new Product('test', 'Test Product', 100)];
    const catalog = new ProductCatalog(products);

    test('calculates total correctly', () => {
        const checkout = new CheckoutService(catalog);
        checkout.scan('test');
        checkout.scan('test');
        expect(checkout.total()).toBe(200);
    });
});