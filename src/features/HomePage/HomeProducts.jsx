import { HiOutlineHeart } from "react-icons/hi";
import LoaderIndicator from "../../ui/LoaderIndicator";
import SearchBar from "../../ui/SearchBar";
import { formatCurrency } from "../../utils/helpers";
import useProducts from "../Products/useProducts";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import RatingStar from "../../ui/RatingStar";

import useAddToCart from "../Cart/useAddToCart";

const HomeProducts = () => {
  const { products, isLoading } = useProducts();
  const { mutate: addToCartClick, isPending } = useAddToCart();
  const navigate = useNavigate();

  // const { imageCover, category, title, price, ratingsAverage } = products;
  if (isLoading) return <LoaderIndicator />;

  return (
    <div>
      <SearchBar />
      <div className="flex gap-10 flex-wrap items-center justify-center mb-16">
        {products.map((product) => (
          <Card
            className="max-w-lg cursor-pointer hover:shadow-2xl duration-300 transition "
            key={product.id}
          >
            <div onClick={() => navigate(`/productDetails/${product.id}`)}>
              <img src={product?.imageCover} alt={product.title} />

              <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.category.name}
              </h2>
              <h3 className="line-clamp-1">{product.title}</h3>
              <div className="flex items-center justify-between">
                <div className="mb-5 mt-2.5 flex items-center">
                  <RatingStar />
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xl font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    {product.ratingsAverage}
                  </span>
                </div>

                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(product.price)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <Button
                disabled={isPending}
                onClick={() => addToCartClick(product.id)}
                className="flex-1 transition duration-500 rounded-lg bg-[--color-green-600]  px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-[--color-green-700] focus:outline-none focus:ring-4 focus:ring-[--color-green-300] dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </Button>
              <span className="text-5xl cursor-pointer">
                <HiOutlineHeart className="" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
