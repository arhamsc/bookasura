import Stripe from 'stripe';
import { requestUrl } from '../../../db/domain_url';

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const handler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case 'POST': {
      const { cartItems } = body;
      const transformedItems = cartItems.map((ele) => {
        return {
          price_data: {
            currency: 'inr',
            product_data: {
              name: ele.name,
              images: [ele.imageUrl],
            },
            unit_amount: ele.price * 100,
          },
          quantity: ele.quantity,
        };
      });
      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: 'payment',
        success_url: requestUrl('checkout/success'),
        cancel_url: requestUrl('checkout/cancel'),
      });
      res.json({ url: session.url });
    }
  }
};

export default handler;
