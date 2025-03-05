import { CheckoutService } from '../../src/core/services/CheckoutService';
import { ProductCatalog } from '../../src/core/models/ProductCatalog';
import { Product } from '../../src/core/models/Product';
import { ThreeForTwoPricingRule } from '../../src/rules/ThreeForTwoPricingRule';
import { BulkDiscountRule } from '../../src/rules/BulkDiscountRule';

describe('Checkout Integration', () => {
    const products = [
        new Product('atv', 'Apple TV', 109.50),
        new Product('ipd', 'Super iPad', 549.99),
        new Product('vga', 'VGA adapter', 30.00)
    ];

    const catalog = new ProductCatalog(products);

    test('Scenario 1: 3x atv + 1x vga', () => {
        const checkout = new CheckoutService(catalog, [new ThreeForTwoPricingRule('atv')]);
        ['atv', 'atv', 'atv', 'vga'].forEach(sku => checkout.scan(sku));
        expect(checkout.total()).toBe(249.00);
    });

    test('Scenario 2: 2x atv + 5x ipd', () => {
        const checkout = new CheckoutService(catalog, [
            new ThreeForTwoPricingRule('atv'),
            new BulkDiscountRule('ipd', 4, 499.99)
        ]);
        ['atv', 'ipd', 'ipd', 'atv', 'ipd', 'ipd', 'ipd'].forEach(sku => checkout.scan(sku));
        expect(checkout.total()).toBeCloseTo(2718.95, 2);
    });
});