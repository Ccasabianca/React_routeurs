import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="my-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
