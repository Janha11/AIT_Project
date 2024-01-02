import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navBar.css';

function NavBar() {
    const NavItem = ['Home', 'Features', 'Products', 'Categories', 'Review', 'Blogs'];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="bg-white text-blue-950 fixed top-0 w-full z-10 nav">
            <div className="container mx-auto py-4">
                <ul className="flex justify-between">
                    <li className="flex items-center">
                        <span className='logoColor'>
                            <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className="w-8 h-8" />
                        </span>
                        <span className='Achievers'>Achievers</span><span className='it'>IT</span>
                    </li>
                    <li className="hidden md:flex ml-4 nav_Items">
                        {NavItem.map((navitem, index) => (
                            <a href={`#${navitem.toLowerCase()}`} key={index} className="px-4">
                                {navitem}
                            </a>
                        ))}
                    </li>

                    <li className="flex items-center nav_icons">
                        <div className=' md:hidden self-center'>
                            <FontAwesomeIcon icon="fa-solid fa-bars" className="w-6 h-6 text-gray-600 mr-4 hover:text-white" onClick={handleToggleMenu} />
                            {isMobileMenuOpen && (
  <section className='mobileView bg-white p-4 flex flex-col container w-full'>
    {NavItem.map((navitem, index) => (
      <a href={`#${navitem.toLowerCase()}`} key={index} className="py-2 text-gray-600 hover:text-blue-950" onClick={closeMobileMenu}>
        {navitem}
      </a>
    ))}
  </section>
)}

                            
                        </div>
                        <div className='color-gray-600 self-center'>
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="w-6 h-6 text-gray-600 mr-4 self-center hover:text-white" />
                        </div>
                        <div className='color-gray-600'>
                            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="w-6 h-8 text-gray-600 mr-6 hover:text-white" />
                        </div>
                        <div className='color-gray-600'>
                            <FontAwesomeIcon icon="fa-solid fa-user" className="w-6 h-6 text-gray-600 hover:text-white" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
