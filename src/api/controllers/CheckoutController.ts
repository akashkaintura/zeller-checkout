import { Request, Response } from 'express';
import { CheckoutService } from '../../core/services/CheckoutService';
import { ProductCatalog } from '../../core/models/ProductCatalog';
import { Product } from '../../core/models/Product';
import { BulkDiscountRule } from '../../rules/BulkDiscountRule';
import { ThreeForTwoPricingRule } from '../../rules/ThreeForTwoPricingRule';

const products = [
    new Product('atv', 'Apple TV', 109.50),
    new Product('ipd', 'Super iPad', 549.99),
    new Product('mbp', 'MacBook Pro', 1399.99),
    new Product('vga', 'VGA adapter', 30.00)
];

const catalog = new ProductCatalog(products);
const checkoutService = new CheckoutService(catalog, [
    new ThreeForTwoPricingRule('atv'),
    new BulkDiscountRule('ipd', 4, 499.99)
]);


export class CheckoutController {
    static processCheckout(req: Request, res: Response): void {
        try {
            const { skus } = req.body;

            if (!Array.isArray(skus)) {
                throw new Error('SKUs must be an array');
            }

            checkoutService.reset();
            skus.forEach(sku => checkoutService.scan(sku));

            const total = checkoutService.total();
            res.status(200).json({
                total: Number(total.toFixed(2)),
                items: skus
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            res.status(400).json({ error: errorMessage });
        }
    }
}