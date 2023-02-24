import "./index.css";
import Product from "../../Component/Product";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Products = () => {

  const products = useSelector((state: RootState) => state?.data?.data);

  return (
    <div>
      <h2 className="product-page-title">Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
