import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./../../../images/exchange-rate.png";
import { useState } from "react";

const NavbarItems = ({ title, classprops }) => {
  return (
    <li className={`mx-4 text-xl cursor-pointer ${classprops}`}>{title}</li>
  );
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4 ">
      <div className="md:flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-16 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-node flex-row  justify-between items-center flex-initial">
        {["Home", "Exchange", "Wallet"].map((item, index) => (
          <NavbarItems key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in">
                <li className="text-xl w-full my-2">
                    <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
                </li>
                {["Home", "Exchange", "Wallet"].map((item, index) => (
          <NavbarItems key={item + index} title={item} classprops="my-2 text-lg text-white"/>
        ))}
            </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
