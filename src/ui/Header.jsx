import Logout from "../features/authentication/Logout";
import CartIcon from "../features/Cart/CartIcon";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 py-8 bg-stone-100 fixed top-0 left-0 right-0 drop-shadow-sm z-10">
      <Logo to="/" />
      <Nav />
   
    </header>
  );
};

export default Header;
