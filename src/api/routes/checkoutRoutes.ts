import { Router } from 'express';
import { CheckoutController } from '../controllers/CheckoutController';

export const checkoutRoutes = Router();


checkoutRoutes.post('/checkout/process', CheckoutController.processCheckout);