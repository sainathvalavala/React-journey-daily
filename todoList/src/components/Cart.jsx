import React from "react";

function Cart({ cartItems }) {
  //    array.reduce((accumulator, currentValue) => accumulator +currentValue,initialValue,);
  const totalPrice = cartItems.reduce((sum, Item) => sum + Item.price, 0);
  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Cart Items</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((x) => (
            <tr>
              <td>{x.title}</td>
              <td>${x.price}</td>
              <td>{x.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>
      <h3>TotalPrice: {totalPrice}</h3>
      <hr></hr>
    </div>
  );
}

export default Cart;
