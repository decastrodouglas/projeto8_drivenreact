import "./CloseOrder.css";

const CloseOrder = ({ activeProducts }) => {

  const checkCondition = () => {
    let hasFood = false;
    let hasDrink = false;
    let hasDessert = false;

    activeProducts.forEach((product) => {
      if (product.type === "food") hasFood = true;
      if (product.type === "drink") hasDrink = true;
      if (product.type === "dessert") hasDessert = true;
    })

    return hasFood && hasDrink && hasDessert;
  }

  const messageMaker = () => {

    let foods = "";
    let drinks = "";
    let desserts = "";
    let totalPrice = 0;

    activeProducts.forEach((product) => {
      const price = Number(product.price.replace(",", ".").slice(3)) * product.qty;
      const message = `${product.name} (${product.qty}): ${price.toFixed(2)}\n`;
      if (product.type === "food") foods += message;
      if (product.type === "drink") drinks += message;
      if (product.type === "dessert") desserts += message;
      totalPrice += price;
    })

    return `Olá, gostaria de fazer um pedido!\n*Prato:*\n${foods}\n*Bebidas:*\n${drinks}\n*Sobremesas:*\n${desserts}\n*Total:* ${totalPrice.toFixed(2)}`;
  }

  const sendMessage = () => {
    if (!checkCondition()) return;
    window.open("https://wa.me/5519971597373?text=" + encodeURIComponent(messageMaker()));
  }

  return (
    <footer className="close-order fixed">
      <button className={(checkCondition()) ? "active" : ""} onClick={sendMessage} >
        <span>
          {(checkCondition()) ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}
        </span>
      </button>
    </footer>
  );
}

export default CloseOrder;