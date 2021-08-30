import Product from "./Product";
import "./Products.css";

const Products = (props) => {

    const {
        title,
        products,
        type,
        activeProducts,
        setActiveProducts
    } = props;

    return (
        <section className="products">
            <h2>{title}</h2>
            <ul className="flex" >
                {products.map((product, key) =>
                    <Product
                        key={key}
                        index={key}
                        product={product}
                        type={type}
                        activeProducts={activeProducts}
                        setActiveProducts={setActiveProducts}
                    />
                )}
            </ul>
        </section>
    );
}

export default Products;