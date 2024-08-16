import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
const CartIcon = () => {
  return (
    <Link to="/cart">
      <div className="relative">
        <span className="absolute left-[15px] transition duration-150 rounded-md top-[-17px] bg-[--color-green] text-white px-2">
          0
        </span>
        <HiMiniShoppingCart className="text-stone-500 text-5xl hover:text-stone-600 transition" />
      </div>
    </Link>
  );
};

export default CartIcon;
