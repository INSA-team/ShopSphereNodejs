import { Link } from "react-router"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import './HomePage.css'

function HomePage(){

  return (
    <>
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <section className="heroSection">
        <h1>Welcome to ShopSphere — The Smart eCommerce Hub</h1>
        <p>A next-generation eCommerce platform where sellers and buyers connect in a seamless, AI-driven shopping experience. Unlike traditional online stores, it focuses on personalization, community-driven trust, and smart automation.</p>
        <Link to='/shop' className="btn shop"><i className="fa fa-shopping-cart"></i>Start shopping</Link>
      </section>
      <section className="features">
        <ul>
          <li><i className="fa fa-robot"></i>AI-driven product recommendations</li>
          <li><i className="fa-solid fa-users"></i>Community-driven reviews and ratings</li>
          <li><i className="fa-solid fa-boxes-stacked"></i>Smart inventory management</li>
          <li><i className="fa-solid fa-user"></i>Personalized shopping experiences</li>
          <li><i className="fa-solid fa-desktop"></i>Seamless multi-device support</li>
          <li><i className="fa-solid fa-truck"></i>Real-time order tracking</li>
        </ul>
      </section>
    </>
  )
}
export default HomePage