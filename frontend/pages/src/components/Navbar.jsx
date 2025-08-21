import { NavLink } from 'react-router';
import './navbar.css'

function Navbar(){

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/categories'>Categories</NavLink>
      <NavLink to='/about'>About Us</NavLink>
    </nav>
  )
}
export default Navbar;