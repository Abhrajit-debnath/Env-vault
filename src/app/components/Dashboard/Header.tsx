import React, { useState } from 'react'

import { Menu } from "lucide-react";
import HamburgerMenu from "../../components/Dashboard/HamburgerMenu";

type HeaderProps = {
  heading: string;
};
const Header:React.FC<HeaderProps> = ({heading}) => { 
    const [menuOpen, setMenuOpen] = useState(false);
  return (
   <div className="bg-gray-800 w-full p-5 flex justify-between mb-8 border-b-[1px] border-gray-600 fixed">
          <h1 className="font-nunito text-lg">{heading}</h1>
          <button className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
          <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>

  )
}

export default Header