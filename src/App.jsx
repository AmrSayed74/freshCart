import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./ui/AppLayout";
import {
  Home,
  Products,
  Wishlist,
  Categories,
  Brands,
  Login,
  Signup,
  PageNotFound,
} from "./pages/index.js";
import Cart from "./pages/Cart.jsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="wishlist" element={<Wishlist />}></Route>
            <Route path="categories" element={<Categories />}></Route>
            <Route path="brands" element={<Brands />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
