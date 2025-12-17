import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";
export const Landing = () => {
  return (
    <>
      <header className="relative">
        <Navbar />
      </header>
      {<Outlet></Outlet>}
    </>
  );
};
