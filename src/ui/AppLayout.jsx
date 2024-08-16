import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className=" mx-auto max-w-4xl mt-[9rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
