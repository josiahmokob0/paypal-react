import React from "react";
import ReactDOM from "react-dom";

const paypal = window.paypal;

const PayPalButton = paypal?.Buttons.driver("react", { React, ReactDOM });

function YourComponent() {
  const createOrder = (data, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "100",
          },
        },
      ],
    });

  const onApprove = (data, actions) => {
    alert("success");
    return actions.order.capture();
  };

  const onError = (error) => {
    alert(error);
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onError={(error) => onError(error)}
    />
  );
}

export default YourComponent;
