import { HiOutlineHeart } from "react-icons/hi";
import Button from "../../ui/Button";
import LoaderIndicator from "../../ui/LoaderIndicator";
import { formatCurrency } from "../../utils/helpers";
import ProductImgSwiper from "./ProductImgSwiper";
import useSpecificProduct from "./useSpecificProduct";
import RatingStar from "../../ui/RatingStar";
import MiniSpinner from "../../ui/miniSpinner";
import useAddToCart from "./../Cart/useAddToCart";

const ProductsDetailsByID = () => {
  const { product, isLoading } = useSpecificProduct();
  console.log(product);
  const { isPending, mutate: addToCartClick } = useAddToCart();
  if (isLoading) return <LoaderIndicator />;
  const { id, title, description, price, ratingsAverage } = product;
  console.log(id);

  return (
    <div className="flex-column md:flex items-center justify-between p-5 gap-16 xl:gap-0 ">
      {isLoading ? <MiniSpinner /> : <ProductImgSwiper product={product} />}
      <div className="flex-1 text-center md:text-start mt-10 md:mt-0 ">
        <h1 className="font-semibold mb-5 text-5xl">{title}</h1>
        <p>{description}</p>

        <div className="m-auto mb-12 md:mb-12 md:m-0 md:mt-12 flex items-center justify-between mt-10 sm:w-[400px] lg:w-[550px]">
          <span>{formatCurrency(price)}</span>
          <div className="flex items-center justify-center">
            <RatingStar />
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-1.5 text-xl font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {ratingsAverage}
            </span>
          </div>
        </div>

        <div className="m-auto mt:12 flex gap-12 md:m-0 sm:w-[400px] lg:w-[550px]">
          <Button
            disabled={isPending}
            onClick={() => addToCartClick(product.id)}
            className="flex-1 transition duration-500 rounded-lg bg-[--color-green-600]  px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-[--color-green-700] focus:outline-none focus:ring-4 focus:ring-[--color-green-300] dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            + Add to cart
          </Button>
          <span className="text-5xl cursor-pointer ">
            <HiOutlineHeart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsByID;
