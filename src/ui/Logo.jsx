import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1 font-medium text-5xl">
      <HiMiniShoppingCart className="text-[--color-green]" />
      <span>fresh cart</span>
    </Link>
  );
};

export default Logo;
