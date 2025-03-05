import { IPricingRule } from '../../core/interfaces/IPricingRule';
import { ProductCatalog } from '../../core/models/ProductCatalog';

export abstract class AbstractPricingRule implements IPricingRule {
    abstract apply(items: Map<string, number>, catalog: ProductCatalog): number;
}
