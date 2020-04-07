import React, { useState } from "react";
import Checkout from "./Checkout";
import { Link } from "@reach/router";

import styled from "styled-components";

const CartSidebar = ({ purchaseItems, setSidebar }) => {
  const itemsTotal = purchaseItems.reduce(
    (total, item) => {
      total[cost] += item.total;
      total[amount] += item.amount;
    },
    { cost: 0, amount: 0 }
  );
  return (
    <Sidebar open={open}>
      <TopBar>
        <button onClick={() => setSidebar(false)}>Close sidebar</button>
      </TopBar>

      <div> You have {amount} bulbs of garlic in your Cart.</div>
      <StyledButton>
        <Link to="checkout">Checkout</Link>
      </StyledButton>
    </Sidebar>
  );
};

export default CartSidebar;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
`;
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
`;

const StyledButton = styled.button`
  padding: 5px 17px;
  background: blue;
`;
