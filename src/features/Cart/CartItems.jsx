import LoaderIndicator from "../../ui/LoaderIndicator";
import useGetCart from "./useGetCart";
import Button from "./../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import useUpdateProduct from "./useUpdateProduct";
import useDeleteFromCart from "./useDeleteFromCart";
import useClearCart from "./useClearCart";

const CartItems = () => {
  const { cart, isLoading } = useGetCart();

  const { updatingProduct, isPending } = useUpdateProduct();
  const { remove, isPending: isRemoving } = useDeleteFromCart();
  const { clear, isPending: isClear } = useClearCart();

  if (isLoading || isClear) return <LoaderIndicator />;

  return (
    <>
      {!cart?.data?.products.length ? (
        <div className="text-center mt-[150px]">
          <span className="font-extrabold">Shopping Cart</span>
          <div className="flex justify-center items-center">
            <img className="w-[500px]" src="emptyCart.png" alt="" />
          </div>
          <span className="text-wrap max-w-[500px] inline-block">
            Before proceed to checkout you must add some products to your
            shopping cart. You will find a lot of interesting products on our
            "Home" page.
          </span>
        </div>
      ) : (
        <div>
          <h1>Cart Shopping</h1>
          <h2>Total Cart Price: {formatCurrency(cart.data.totalCartPrice)}</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-xlg text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-14 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.data.products.map((product) => (
                  <tr
                    key={product.product.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4">
                      <img
                        src={product.product.imageCover}
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.title}
                    </td>
                    <td className="">
                      <div className="flex items-center">
                        <button
                          disabled={isPending}
                          onClick={() =>
                            updatingProduct({
                              productId: product.product.id,
                              count: product.count - 1,
                            })
                          }
                          className="inline-flex items-center justify-center h-10 w-10  me-3 text-xl font-extrabold text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <span className="bg-gray-50 w-28 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {product?.count}
                          </span>
                        </div>
                        <button
                          disabled={isPending}
                          onClick={() =>
                            updatingProduct({
                              productId: product.product.id,
                              count: product.count + 1,
                            })
                          }
                          className="inline-flex items-center justify-center h-10 w-10  ms-3 text-xl font-extrabold text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.price}
                    </td>
                    <td className="px-6 py-4">
                      <Button
                        disabled={isRemoving}
                        onClick={() => remove(product.product.id)}
                        className="font-medium text-xl rounded-md p-2 text-white bg-red-600 hover:bg-red-700 duration-150 transition"
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <Button
              disabled={isClear}
              onClick={() => clear()}
              className="mt-12  font-medium text-2xl rounded-md px-6 py-4 text-white bg-red-600 hover:bg-red-700 duration-150 transition"
            >
              Clear cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;

