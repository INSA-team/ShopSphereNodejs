import Header from "../components/Header";
import Navbar from "../components/Navbar";

function AboutPage() {
  return (
    <>
      <div className="top">
        <Header />
        <Navbar />
      </div>
      <div style={{ padding: "20px" }}>
        <h1 style={{ color: "#309A9D" }}>About Us</h1>
        <p>
          ShopSphere is your go-to destination for all your shopping needs. We
          give you access to a wide range of products at competitive prices and
          get access to future deals. Our goal is to make everyone happy,
          including our sellers and buyers. Also, we would give you the joy of
          shopping that can elevate your experience. For the latest updates and
          exclusive offers, be sure to subscribe to our newsletter! and follow
          us on social media! this are our social media please follow us on
          <div style={{display: "flex" , alignItems: "center",padding:"10px 0"}}>
            <a href="https://www.facebook.com/ShopSphere" target="_blank" style={{ margin: "5px auto", textDecoration : "none" , background : "#1877F2" , color: "white" , padding : "1rem", borderRadius : "5rem"}}> <i className="fa-brands fa-facebook"></i> Facebook</a>,
            <a href="https://www.instagram.com/ShopSphere" target="_blank" style={{ margin: "5px auto", textDecoration : "none" , backgroundImage : "linear-gradient(135deg, #fcb045, #fd1d1d, #833ab4)" , color: "white" , padding : "1rem", borderRadius : "5rem"}}><i className="fa-brands fa-instagram"></i> Instagram</a>,
            <a href="https://www.twitter.com/ShopSphere" target="_blank" style={{ margin: "5px auto", textDecoration : "none" , background : "black" , color: "white" , padding : "1rem", borderRadius : "5rem"}}><i className="fa-brands fa-x-twitter"></i> X(Twitter)</a>.
          </div>
        </p>
      </div>
    </>
  );
}
export default AboutPage;
