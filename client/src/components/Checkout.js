import React, { useState } from "react";
import Purchase from "./Purchase";
import CheckoutForm from "./CheckoutForm";
import styled from "styled-components";

import { connect } from "react-redux";
import { aggregateCartTotals } from "../reducers/cart";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_jOgo4md45t5TTraVaobJ6Lg400J8bGMDJx");

const Checkout = ({ cartTotals }) => {
  const [customer, setCustomer] = useState({});
  const [customerFormStatus, setCustomerFormStatus] = useState(false);
  const onSubmit = (data) => {
    setCustomer(data);
    setCustomerFormStatus(true);
  };
  return (
    <div>
      <CheckoutForm
        onSubmit={onSubmit}
        status={customerFormStatus}
        amount={cartTotals.cost}
      />
      {customerFormStatus && (
        <Elements stripe={stripePromise}>
          <Purchase amount={cartTotals.cost} />
        </Elements>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartTotals: aggregateCartTotals(state),
});

export default connect(mapStateToProps, null)(Checkout);

const Input = styled.input`
  white-space: pre-line;
`;