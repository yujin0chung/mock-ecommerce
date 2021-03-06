import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getCartProducts,
  aggregateCartTotals,
  getCartSidebarStatus,
} from "../reducers/cart";
import {
  getUser,
  getUserAuthStatus,
  getAccountSidebarStatus,
} from "../reducers/user";
import { getMarketplace } from "../reducers/marketplace";
import { getProducts } from "../reducers/products";
import { getShowSearchStatus } from "../reducers/search";
import { getVendors } from "../reducers/vendors";
import {
  removeFromCart,
  receiveUser,
  removeUser,
  updateCartSidebarStatus,
  checkUserAuthenticated,
  updateUserAuth,
  updateAccountSidebarStatus,
  getMarketplaceData,
  getAllProducts,
  getAllVendors,
  updateShowSearch,
} from "../actions";

import Header from "./Header";
import CartSidebar from "./CartSidebar";
import AccountSidebar from "./AccountSidebar";
import NavBar from "./NavBar";
import CounterSidebar from "./CounterSidebar";
import SearchBar from "./SearchBar";

const Home = ({
  marketplace,
  getMarketplaceData,
  products,
  vendors,
  getAllProducts,
  cart,
  cartTotals,
  cartSidebarStatus,
  updateCartSidebarStatus,
  removeFromCart,
  user,
  receiveUser,
  removeUser,
  userAuthStatus,
  checkUserAuthenticated,
  updateUserAuth,
  accountSidebarStatus,
  updateAccountSidebarStatus,
  showSearch,
  updateShowSearch,
}) => {
  useEffect(() => {
    checkUserAuthenticated();
    getMarketplaceData();
    getAllProducts();
    getAllVendors();
  }, []);
  const onCounterSidebarClick = () => {
    updateAccountSidebarStatus(false);
    updateCartSidebarStatus(false);
  };
  const sidebarOpen = accountSidebarStatus || cartSidebarStatus;
  return (
    <div>
      <div>
        <NavBar
          updateShowSearch={updateShowSearch}
          updateAccountSidebarStatus={updateAccountSidebarStatus}
          updateCartSidebarStatus={updateCartSidebarStatus}
        />
        <SearchBar
          show={showSearch}
          updateShowSearch={updateShowSearch}
          products={products}
          vendors={vendors}
        />
        <div onClick={() => onCounterSidebarClick()}>
          <CounterSidebar active={sidebarOpen} />
        </div>
        <CartSidebar
          products={products}
          open={cartSidebarStatus}
          updateSidebarStatus={updateCartSidebarStatus}
          getCartSidebarStatus={getCartSidebarStatus}
          purchaseItems={cart}
          purchaseItemsTotal={cartTotals}
          removeFromCart={removeFromCart}
        />
        <AccountSidebar
          open={accountSidebarStatus}
          receiveUser={receiveUser}
          removeUser={removeUser}
          updateAccountSidebarStatus={updateAccountSidebarStatus}
          user={user}
          signedIn={userAuthStatus}
          updateUserAuth={updateUserAuth}
          checkUserAuthenticated={checkUserAuthenticated}
        />
        <Header title={marketplace.name} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  marketplace: getMarketplace(state),
  cart: getCartProducts(state),
  cartTotals: aggregateCartTotals(state),
  cartSidebarStatus: getCartSidebarStatus(state),
  accountSidebarStatus: getAccountSidebarStatus(state),
  user: getUser(state),
  products: getProducts(state),
  vendors: getVendors(state),
  userAuthStatus: getUserAuthStatus(state),
  showSearch: getShowSearchStatus(state),
});

export default connect(mapStateToProps, {
  removeFromCart,
  aggregateCartTotals,
  receiveUser,
  removeUser,
  updateCartSidebarStatus,
  updateAccountSidebarStatus,
  checkUserAuthenticated,
  updateUserAuth,
  getMarketplaceData,
  getAllProducts,
  getAllVendors,
  updateShowSearch,
})(Home);
