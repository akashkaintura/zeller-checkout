import { ProductCatalog } from "../models/ProductCatalog";

export interface IPricingRule {
    apply(items: Map<string, number>, catalog: ProductCatalog): number;
}