import React, { useState } from "react";

const Header = () => {
  const menuData = {
    Home: [],
    "About Us": [],
    Contact: [],
    Services: ["Service 1", "Service 2", "Service 3", "Service 4"],
    Locations: ["Location 1", "Location 2", "Location 3", "Location 4"],
  };

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMouseEnter = (menu) => {
    if (menuData[menu].length > 0) {
      setDropdownOpen(menu);
    }
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <header className="bg-[#1b1b27] fixed w-full p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-[#fdfeff] font-lobster text-2xl font-extrabold tracking-wide">
          <h1>JagNets</h1>
        </div>

        {/* Navigation Links with Dropdown */}
        <nav>
          <ul className="flex space-x-10 items-center">
            {Object.keys(menuData).map((menu) => (
              <li
                key={menu}
                className="relative  font-semibold group"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <p className="text-[#fdfeff] text-lg cursor-pointer hover:text-[#f45d48] transition duration-300">
                  {menu}
                </p>

                {/* Only render dropdown for Services and Locations */}
                {dropdownOpen === menu && menuData[menu].length > 0 && (
                  <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg  rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Sharp End that blends with the dropdown */}
                    <div className="absolute top-[-6px] left-5 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                    <ul className="py-3 ">
                      {menuData[menu].map((item, index) => (
                        <li
                          key={index}
                          className="px-6 py-2 text-sm text-[#1b1b27] hover:bg-[#f45d48]  hover:text-[#fdfeff] transition-colors duration-300"
                        >
                          <p href="#">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Call Now Button */}
        <div>
          <button className="bg-[#f45d48] text-[#fdfeff] py-2 px-6 rounded-full border-2 border-transparent hover:bg-[#fdfeff] hover:text-[#f45d48] hover:border-[#f45d48] transition-all duration-300">
            Call Now
          </button>
        </div>
      </div>

      {/* Mobile View (optional) */}
      <div className="lg:hidden flex justify-end mt-4">
        <button className="text-[#fdfeff] bg-[#f45d48] px-4 py-2 rounded-md">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
