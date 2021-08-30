const Counter = (props) => {

    const {
        counter,
        counterTools
    } = props;

    return (
        <div className="product-counter">
          <button className="btn-minus" onClick={(event) => counterTools("-", event)}>-</button>
          <span>{counter}</span>
          <button className="btn-plus" onClick={(event) => counterTools("+", event)}>+</button>
        </div>
    );
}

export default Counter;