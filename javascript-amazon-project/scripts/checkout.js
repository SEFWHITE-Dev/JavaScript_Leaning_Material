import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-oop.js'; // this syntx just runs the code within the file without importing anything
//import '../data/backend-practice.js'
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";



// Promise.all(): lets us run multiple promises at the same time, 
// and wait for ALL of them to finish
Promise.all([
  loadProductsFetch(),
  new  Promise((resolve) => {
    loadCart(() => {      
      resolve('value1'); 
    });
  })

]).then((values) => {
  console.log(values); // values will return the passed in params for ALL the resolves within the array
  renderOrderSummary();
  renderPaymentSummary();
});



/*
// Promise is a built-in class, when created, pass in a function
// when we create this Promise, it's going to run the passed in function immediately
// 'resolve' is a function, simliar to Jasmine's 'done()' function
// resolve lets us control when to go to the next step
// a Promise creates a separate 'thread' of code, which runs at the same time as other functions
new Promise((resolve) => {
  
  loadProducts(() => {
    // once the Promise finishes, it will move onto the Next Step, 
    // which is separate from the rest of the code
    
    resolve(); // lets us decide when to move onto the next step
  });
}).then(() => { // the 'second' step is called by .then()

  // inside .then(), if we want to use resolve(), we can return a new Promise
  return new Promise((resolve) => {
    loadCart(() => {
      // it is possible to give resolve a param
      resolve('value1'); 
    });
  });
  // the param passed in resolve() can be used as a param for then()
}).then((value) => { 
  console.log(value); // it is possible to share a value across two diffrent steps
  renderOrderSummary();
  renderPaymentSummary();
});
*/


// It is best practice to use Promises over Callbacks

// multiple Callbacks cause a lot of nesting(code inside code), which makes the code hard to work with
// Promises solves this problem by letting us 'flatten' our code
/*
loadProducts(() => { // anonymous function: a function without a name
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/