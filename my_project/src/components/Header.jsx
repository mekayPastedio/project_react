import { NavLink } from 'react-router';
import logo from '../logo.png'


function Header() {
  return (
    <div className="flex justify-between items-center py-4 w-full px-[40px] relative slide-in-top">
      {/* Logo on the left */}
    
      <img src={logo} className="w-[50px] h-[50px]" alt="Logo" />
      <p class="font-kholic" className='font-bold text-lg  pl-2' style={{ letterSpacing: '0.2em' }}>Bloom</p>

      {/* Navbar in the center */}
      <nav className="flex gap-6 text-[18px] w-[500px] overflow-hidden rounded-3xl font-bold tracking-widest text-[#FFF4F4] text-sm cursor-pointer transition-all duration-1000 px-8 py-2 bg-[#243642] bg-opacity-70 backdrop-blur-xl max-w-4xl justify-center mx-auto sticky top-0 z-50">
        {/* Home */}
        <div className="relative group">
          <NavLink to="/" className="hover:text-[#FFF4F4]">Home</NavLink>
          <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
        </div>

        {/* Products */}
        <div className="relative group">
          <NavLink to="/products" className="hover:text-[#FFF4F4]">Products</NavLink>
          <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
        </div>

        {/* Delivery */}
        <div className="relative group">
          <NavLink to="/delivery" className="hover:text-[#FFF4F4]">Delivery</NavLink>
          <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
        </div>

        {/* Feature */}
        <div className="relative group">
          <NavLink to="/feature" className="hover:text-[#FFF4F4]">Feature</NavLink>
          <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
        </div>

        {/* Contact */}
        <div className="relative group">
          <NavLink to="/contact" className="hover:text-[#FFF4F4]">Contact</NavLink>
          <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#FFF4F4] transition-all duration-300 group-hover:w-full bottom-0"></span>
        </div>
      </nav>

      {/* Log In and Cart on the right */}
      <div className="flex text-[17px]">
        <ul className="flex list-none space-x-4">
          <li className="relative group">
            <a href="#" className="text-[#243642] font-bold hover:text-[#243642] relative inline-block">Log In</a>
            <span className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#243642] transition-all duration-300 group-hover:w-full bottom-0"></span>
          </li>
          <p className="text-[#243642] ">|</p>
          <li>
            <a href="" className="text-[#243642] font-bold rounded-full">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
