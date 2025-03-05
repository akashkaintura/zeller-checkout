import { ICheckout } from '../interfaces/ICheckout';
import { ProductCatalog } from '../models/ProductCatalog';
import { IPricingRule } from '../interfaces/IPricingRule';

export class CheckoutService implements ICheckout {
    private items: Map<string, number> = new Map();

    reset(): void {
        this.items.clear();
    }

    constructor(
        private readonly catalog: ProductCatalog,
        private readonly pricingRules: IPricingRule[] = []
    ) { }

    scan(sku: string): void {
        if (!this.catalog.getProduct(sku)) {
            throw new Error(`Invalid product SKU: ${sku}`);
        }
        this.items.set(sku, (this.items.get(sku) || 0) + 1);
    }

    total(): number {
        let total = 0;

        this.items.forEach((qty, sku) => {
            total += qty * this.catalog.getPrice(sku);
        });

        return total - this.pricingRules.reduce(
            (discount, rule) => discount + rule.apply(this.items, this.catalog), 0
        );
    }
}