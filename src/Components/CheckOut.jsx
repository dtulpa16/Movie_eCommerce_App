import React from 'react';
import { useEffect, useRef } from 'react/cjs/react.development';


const Checkout = () => {

  const paypal = useRef()

  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          layout:  'vertical',
          color:   'blue',
          shape:   'rect',
          label:   'checkout',
        },
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Movies",
                amount: {
                  currency_code: "USD",
                  value: 10,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div width="20%" height = "15%"ref={paypal}></div>
    </div>
  )
}


export default Checkout;