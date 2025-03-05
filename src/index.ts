import { Product } from './core/models/Product';
import { ProductCatalog } from './core/models/ProductCatalog';
import { CheckoutService } from './core/services/CheckoutService';
import { BulkDiscountRule } from './rules/BulkDiscountRule';
import { ThreeForTwoPricingRule } from './rules/ThreeForTwoPricingRule';


const products = [
    new Product('atv', 'Apple TV', 109.50),
    new Product('ipd', 'Super iPad', 549.99),
    new Product('mbp', 'MacBook Pro', 1399.99),
    new Product('vga', 'VGA adapter', 30.00)
];

const catalog = new ProductCatalog(products);

const pricingRules = [
    new ThreeForTwoPricingRule('atv'),
    new BulkDiscountRule('ipd', 4, 499.99)
];

const checkout = new CheckoutService(catalog, pricingRules);

checkout.scan('atv');
checkout.scan('atv');
checkout.scan('atv');
checkout.scan('vga');

console.log('Total:', checkout.total());