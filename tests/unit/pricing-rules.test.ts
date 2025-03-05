import { BulkDiscountRule } from '../../src/rules/BulkDiscountRule';
import { ProductCatalog } from '../../src/core/models/ProductCatalog';
import { Product } from '../../src/core/models/Product';

describe('BulkDiscountRule', () => {
    const catalog = new ProductCatalog([new Product('test', 'Test', 100)]);

    test('applies discount when threshold exceeded', () => {
        const rule = new BulkDiscountRule('test', 5, 80);
        const items = new Map([['test', 6]]);
        expect(rule.apply(items, catalog)).toBe(120);
    });
});