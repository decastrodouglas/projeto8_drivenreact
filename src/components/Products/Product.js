import React, { useState } from "react";
import Counter from "./Counter";

const Product = (props) => {

  const [active, setActive] = useState("");
  const [counter, setCounter] = useState(0);

  const {
    image,
    description,
    name,
    price,
    type,
  } = props.product;

  const {
    index,
    activeProducts,
    setActiveProducts
  } = props;

  const selectProduct = () => {
    if (counter === 0) {
      setCounter(1);
      setActiveProducts([...activeProducts, { index, name, price, type, qty: 1 }]);
    }
    setActive("active");
  }

  const counterTools = (operation, event) => {
    let auxArray = [...activeProducts];
    if (operation === "+") {
      setCounter(counter + 1);
      
      auxArray.forEach((product) => {
        if (product.index === index && product.type === type) {
          product.qty += 1
        }
      });

    } else {

      auxArray.forEach((product) => {
        if (product.index === index && product.type === type) {
          product.qty -= 1
          if (product.qty === 0) {
            auxArray.splice(auxArray.indexOf(product), 1);
          }
        }
      });

      if (counter === 1) {
        setActive("");
      }
      setCounter(counter - 1);
    }
    setActiveProducts(auxArray);
    event.stopPropagation();
  }

  return (type === props.type) ? (
    <li className={`product ${active}`} onClick={selectProduct} >
      <img src={image} alt={description} />
      <strong>{name}</strong>
      <p>{description}</p>
      <strong>{price}</strong>

      {(active === "active") ? (
        <Counter
          counter={counter}
          counterTools={counterTools}
        />
      ) : null}

    </li>
  ) : null;
}

export default Product;