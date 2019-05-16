const stripe = require('stripe')('sk_test_9EZFEvJf4jw2nzjIPj04OGAg00DyBuWhMC');
const bodyParser = require('body-parser');
const { Router } = require('express');

const router = Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  (async () => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          name: 'T-shirt',
          description: 'Comfortable cotton t-shirt',
          images: ['https://example.com/t-shirt.png'],
          amount: 500,
          currency: 'usd',
          quantity: 1,
        },
      ],
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

    res.send(session);
  })();
});

module.exports = router;
