import "./CheckOrder.css"

const CheckOrder = () => {

  const orders = [
    { name: "Frango yin yang", price: 14.9 },
    { name: "Coquinha gelada", price: 4.9 },
    { name: "Pudim", price: 7.9 },
  ]

  return (
    <section className="check-order">
      <header>
        <h2>Revise seu pedido</h2>
      </header>

      <ul>
        {orders.map((order, key) => {
          return <ProductInfo data={order} key={key} />;
        })}
        <li className="flex" >
          <strong>Total</strong>
          <strong>{sumPriceOfOrders(orders).toFixed(2).replace(".", ",")}</strong>
        </li>
      </ul>

      <button className="confirm">Tudo certo, pode pedir!</button>
      <button className="cancel">Cancelar</button>
    </section>
  );
}

const sumPriceOfOrders = (orders) => {
  let soma = 0;
  orders.forEach((order) => {
    soma += order.price
  });
  return soma;
}

const ProductInfo = (props) => {

  const {
    name,
    price,
  } = props.data;

  return (
    <li className="flex" >
      <p>{name}</p>
      <p>{price.toFixed(2).replace(".", ",")}</p>
    </li>
  );
}

export default CheckOrder;