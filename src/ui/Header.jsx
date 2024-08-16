import Logout from "../features/authentication/Logout";
import CartIcon from "../features/Cart/CartIcon";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-3 py-8 bg-stone-100 fixed top-0 left-0 right-0 drop-shadow-sm">
      <Logo />
      <Navbar />
      <div className="flex items-center gap-8">
        <CartIcon />
        <Logout />
      </div>
    </header>
  );
};

export default Header;
