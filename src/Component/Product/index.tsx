import { useDispatch } from "react-redux";
import { addItem } from "../../store/cart/cartSlice";
import "./index.css";

interface ProductProps {
    product: any;
    showCheckout?: boolean;
}

const Product = ({ product, showCheckout }: ProductProps) => {

    const dispatch = useDispatch();

    const updateCart = () => {
        const upadtedCartValue = Number(localStorage.getItem("cart")) + 1;
        console.log(upadtedCartValue);
        dispatch(addItem({
            id: product?.id,
            title: product?.title,
            price: product?.price,
            description: product?.description, 
            category: product?.category, 
            image: product?.image,
            quantity: 1
        }));
    }

    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>₹ {product.price}</p>
            {showCheckout !== false && <button onClick={updateCart}>Add to cart</button>}
        </div>
    );
};

export default Product;