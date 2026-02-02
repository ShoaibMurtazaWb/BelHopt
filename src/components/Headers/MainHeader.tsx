import { useNavigate } from "react-router-dom";
import { SearchIcon, ShoppingCart } from "lucide-react";
import { useQueryState } from "nuqs";
import Breadcrumbs from "../../components/Breadcrumbs/BreadCrumps";
import Button from "../Button";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/auth-context";

export default function MainHeader() {
  const [auth, setAuth] = useState("Login");
  const navigate = useNavigate();
  const [search, setSearch] = useQueryState("search");
  const {totalItems} = useCart()

  const { isAuthenticated } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      setAuth("Logout");
    } else {
      setAuth("Login");
    }
  }, [isAuthenticated])

  return (
    <header className="w-full">
      <div className="flex justify-between items-center px-4 py-3 mx-auto sm:px-10 md:px-10 lg:px-20 max-w-700 shadow shadow-darkgray  ">
        {/* Site Logo  */}
        <div>
          <img
            className="w-20 sm:w-24 lg:w-30 hover:cursor-pointer"
            src="../../public/Logo.png"
            alt="Bellhpot"
            onClick={() => navigate("/")}
          />
        </div>

        {/*  Search and  Chart */}
        <div className="flex gap-1.5 w-2xs sm:w-sm lg:w-lg sm:gap-2 lg:gap-5">
          <div className="flex justify-center items-center w- sm:w-full  rounded-full bg-gray-100 pl-3 py-1.5 pr-0 sm:px-6 sm:py-3 sm:pr-12 text-sm ">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search products here..."
              value={search ?? ""}
              onChange={(e) => setSearch(e.target.value || null)}
              className="w-full px-4 rounded-full focus:outline-none"
            />
          </div>
          <Button onClick={() => navigate("/cart")} className="flex gap-2">
            <ShoppingCart />
            <span>{totalItems}</span>
          </Button>
          <Button
            onClick={() => {
              localStorage.removeItem("accessToken");
              navigate("/login");
              setAuth("Logout");
            }}
          >
            {auth}
          </Button>
        </div>
      </div>

      <div className="max-w-700 mx-auto">
        <Breadcrumbs />
      </div>
    </header>
  );
}
