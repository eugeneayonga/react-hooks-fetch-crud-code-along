import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDeleteItem(item));
  }

  // function handleDeleteItem(deletedItem) {
  //   const updatedItems = item.filter((item) => item.id !== deletedItem.id);
  //   setItems(updatedItems);
  // }

  function handleAddToCartCLick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isInCart: !item.isInCart, }),
    })
      .then((response) => response.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button
         className={item.isInCart ? "remove" : "add"}
         onClick={handleAddToCartCLick}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
