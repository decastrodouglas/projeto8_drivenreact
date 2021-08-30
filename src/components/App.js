import React, { useState } from "react";
import Header from "./Header/Header";
import Products from "./Products/Products";
import CloseOrder from "./CloseOrder/CloseOrder";
// import CheckOrder from "./CheckOrder";
import frango from "./Products/img/frango_yin_yang.jpg";
import coca from "./Products/img/coquinha_gelada.jpg";
import pudim from "./Products/img/pudim.jpg";

const App = () => {

	const [activeProducts, setActiveProducts] = useState([]);

	const products = {
		food: [
			{ name: "Frango yin yang", image: frango, description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90", type: "food" },
			{ name: "Frango yin yang", image: frango, description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90", type: "food" },
			{ name: "Frango yin yang", image: frango, description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90", type: "food" },
		],
		drink: [
			{ name: "Coquinha gelada", image: coca, description: "Lata 350ml", price: "R$ 4,90", type: "drink" },
			{ name: "Coquinha gelada", image: coca, description: "Lata 350ml", price: "R$ 4,90", type: "drink" },
			{ name: "Coquinha gelada", image: coca, description: "Lata 350ml", price: "R$ 4,90", type: "drink" },
		],
		dessert: [
			{ name: "Pudim", image: pudim, description: "Apenas pudim", price: "R$ 7,90", type: "dessert" },
			{ name: "Pudim", image: pudim, description: "Apenas pudim", price: "R$ 7,90", type: "dessert" },
			{ name: "Pudim", image: pudim, description: "Apenas pudim", price: "R$ 7,90", type: "dessert" },
		]
	};

	return (
		<>
			<Header />

			<main>
				<Products
					title="Primeiro, seu prato"
					products={products.food}
					type="food"
					activeProducts={activeProducts}
					setActiveProducts={setActiveProducts}
				/>

				<Products
					title="Agora, sua bebida"
					products={products.drink}
					type="drink"
					activeProducts={activeProducts}
					setActiveProducts={setActiveProducts}
				/>

				<Products
					title="Por fim, sua sobremesa"
					products={products.dessert}
					type="dessert"
					activeProducts={activeProducts}
					setActiveProducts={setActiveProducts}
				/>

				<CloseOrder activeProducts={activeProducts} />
			</main>

			{/* <CheckOrder /> */}
		</>
	);
}

export default App;