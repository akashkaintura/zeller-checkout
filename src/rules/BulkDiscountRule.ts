import { ProductCatalog } from '../core/models/ProductCatalog';
import { AbstractPricingRule } from './base/AbstractPricingRule';

export class BulkDiscountRule extends AbstractPricingRule {
    constructor(
        private readonly sku: string,
        private readonly threshold: number,
        private readonly discountedPrice: number
    ) {
        super();
    }

    apply(items: Map<string, number>, catalog: ProductCatalog): number {
        const qty = items.get(this.sku) || 0;
        if (qty > this.threshold) {
            const originalPrice = catalog.getPrice(this.sku);
            return (originalPrice - this.discountedPrice) * qty;
        }
        return 0;
    }
}