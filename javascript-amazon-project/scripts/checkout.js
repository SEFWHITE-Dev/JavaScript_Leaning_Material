import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js'; // this syntx just runs the code within the file without importing anything
//import '../data/backend-practice.js'
import { loadProducts } from "../data/products.js";


loadProducts(() => { // anonymous function: a function without a name
  renderOrderSummary();
  renderPaymentSummary();
});
