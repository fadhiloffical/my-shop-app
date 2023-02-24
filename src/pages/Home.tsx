import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Carousel from "../Component/Carousel";
import Product from "../Component/Product";
import TermsDialog from "../Component/TermsDialog";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { fetchData } from "../store/data/dataActions";


const Home = () => {

  const [showTermsDialog, setShowTermsDialog] = useState<Boolean>(localStorage.getItem("termsAccepted") !== "true");

  const handleCancelTerms = () => {
    setShowTermsDialog(false);
  }

  const handleAcceptTerms = () => {
    setShowTermsDialog(false);
    localStorage.setItem("termsAccepted", "true");
  }

  // const items = [
  //     { id: 1, image: "https://placehold.it/300x200" },
  //     { id: 2, image: "https://placehold.it/300x200" },
  //     { id: 3, image: "https://placehold.it/300x200" },
  // ];

  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state?.data?.data?.slice(0, 8));
  
  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  return (
    <div>
      {/* <Carousel items={items} /> */}
      <div className="products-wrapper">
        <h2>Products</h2>
        <div className="product-container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <div className="show-more-button-wrapper">
          <Link to="/products"><button className="show-all-button">All Products</button></Link>
        </div>
      </div>
      {showTermsDialog && (
        <TermsDialog onCancel={handleCancelTerms} onAccept={handleAcceptTerms} />
      )}
    </div>
  );
}

export default Home;
