import Header from "../components/Header";
import Navbar from "../components/Navbar";
import React from "react";
import axios from "axios";
import './ShopPage.css'; // Assuming you have a CSS file for styling
import { Link } from "react-router";

function ShopPage({ setProuductIndex }) {
  const [topSellers, setTopSellers] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/api/top-sellers/')
      .then((response) => {
        // Access the array from the response data correctly
        // For example, if your API returns { data: [...] }
        setTopSellers(response.data.values); // Adjust this line based on your API's response format
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <>
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <section className="topSellers">
        {/* Use conditional rendering to check if topSellers is a valid array */}
        {topSellers && topSellers.length > 0 && topSellers.map((seller,index) => (
          <div key={seller.id} className="seller">
            <img src={seller.imageUrl} alt={seller.name} />
            <h2>{seller.name}</h2>
            <span className="stars">
              {[...Array(seller.rating)].map((_, i) => (
                <i key={i} className="fas fa-star obtained"></i>
              ))}
              {[...Array(5 - seller.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </span>
            <button onClick={() => setProuductIndex(index)}><Link to='/details'><i className="fas fa-arrow-right"></i></Link></button>
          </div>
        ))}
      </section>
    </>
  )
}

export default ShopPage;