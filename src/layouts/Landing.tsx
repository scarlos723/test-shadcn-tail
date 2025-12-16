import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";
export const Landing = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {<Outlet></Outlet>}
    </>
  );
};
