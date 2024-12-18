// export lets the var be accessed outside this script, with 'module'
export const cart = [];

export function addToCart(selectedProductId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (selectedProductId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  }
  else {
    cart.push({
      productId: selectedProductId,
      quantity: 1
    });
  }
}
