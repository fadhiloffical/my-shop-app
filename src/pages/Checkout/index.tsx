import "./index.css";
import Product from "../../Component/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Checkout = () => {

  const products = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2 className="cart-title">My Cart</h2>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} showCheckout={false}/>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
