import { ProductCatalog } from '../core/models/ProductCatalog';
import { AbstractPricingRule } from './base/AbstractPricingRule';

export class ThreeForTwoPricingRule extends AbstractPricingRule {
    constructor(private readonly sku: string) {
        super();
    }

    apply(items: Map<string, number>, catalog: ProductCatalog): number {
        const qty = items.get(this.sku) || 0;
        const price = catalog.getPrice(this.sku);
        return Math.floor(qty / 3) * price;
    }
}