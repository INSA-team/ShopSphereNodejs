import axios from "axios";
import React from "react";
import "./DetailsPage.css"; // Assuming you have a CSS file for styling
import Header from "../components/Header";
import Navbar from "../components/Navbar";

// This component fetches and displays details for a single product.
// The product index is passed in as a prop.
function DetailsPage({ productIndex }) {
  // Use a single object to store the product details, initialized as null.
  const [productDetails, setProductDetails] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);


  
  React.useEffect(() => {
    // Check if a productIndex is provided before fetching.
    if (productIndex !== undefined && productIndex !== null) {
      setLoading(true);
      console.log("Product index:", productIndex);
      setError(null);

      // Make the API call to the correct endpoint with the correct query parameter name.
      axios
        .get(`http://localhost:3000/api/product?index=${productIndex}`)
        .then((response) => {
          // The API returns a single product object, not an array.
          // Directly set the state with the response data.
          setProductDetails(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(
            "There was an error fetching the product details!",
            err
          );
          setError("Failed to load product details.");
          setLoading(false);
        });
    }
  }, [productIndex]); // Rerun the effect whenever the productIndex changes.

  // Conditional rendering based on the loading and error states.
  if (loading) {
    return (
      <div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div>
        <p>No product found.</p>
      </div>
    );
  }

  // Render the product details once the data is loaded.
  return (
    <>
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <div className="product-container">
        <div className="grid">
          <img
            src={productDetails.imageUrl}
            alt={productDetails.name}
            className="product-image"
          />
          <div className="desc">
            <h2 className="product-title">{productDetails.name}</h2>
            <div className="details">
              <p>{productDetails.description}</p>
              <p>
                <b>${productDetails.price}</b>
              </p>
              {/* Display rating as stars */}
              <div className="rating-container">
                <span className="rating-text">Rating:</span>
                <div className="star-container">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${
                        i < productDetails.rating ? "star-filled" : "star-empty"
                      }`}
                    >
                      <i className="fas fa-star">
                        {" "}
                        {/* Font Awesome icon for a star */}
                      </i>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </>
  );
}

export default DetailsPage;
