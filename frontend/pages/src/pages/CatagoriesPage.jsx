import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router"; // Don't forget to import Link
import './CatagoriesPage.css'

function CategoriesPage() {
  const [categories, setCategories] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [productIndex, setProductIndex] = React.useState(null); // Assuming this state is for product details

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/top-sellers?expand=categories")
      .then((response) => {
        setCategories(response.data.values);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    axios
      .get("http://localhost:3000/api/top-sellers")
      .then((response) => {
        setProducts(response.data.values);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log("Products:", products);

  return (
    <>
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <h1>Categories</h1>
      <p>Explore our wide range of categories to find the products you love!</p>

      {/* Corrected: Wrap the contents of the map function in a single element */}
      {categories.map((group, index) => (
        <div key={index}>
          <h2>{group}</h2>
          {/* Filter products for the current category */}
          <div className="products">
            {products
              .filter((seller) => seller.category === group)
              .map((seller) => (
                <div key={seller.id} className="seller">
                  <img src={seller.imageUrl} alt={seller.name} />
                  <h3>{seller.name}</h3>
                  <span className="stars">
                    {[...Array(seller.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star obtained"></i>
                    ))}
                    {[...Array(5 - seller.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </span>
                  {/* Corrected onClick handler */}
                  <button onClick={() => setProductIndex(seller.id)}>
                    <Link to="/details">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoriesPage;
