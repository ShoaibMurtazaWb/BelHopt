import { useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import {SearchIcon, ShoppingCart} from "lucide-react";
import { useQueryState } from "nuqs";
import Breadcrumbs from "../../components/Breadcrumbs/BreadCrumps";


export default function MainHeader() {

  const navigate = useNavigate();
  const {totalItems} = useCart()
  const [search, setSearch] = useQueryState("search");
  return (

    <header className="w-full">

    <div className="flex justify-between items-center px-4 py-3 mx-auto sm:px-10 md:px-10 lg:px-20 lg:max-w-[2800px] shadow shadow-darkgray  ">

      {/* Site Logo  */ }
      <div>
        <img
          className="w-20 sm:w-24 lg:w-30"
          src="../../public/Logo.png"
          alt="Bellhpot"
          onClick={() => navigate('/')}
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
        <button className="w-20 flex justify-center items-center bg-red-5 rounded-full text-white" 
        onClick={() => navigate('/cart')}>
          <ShoppingCart />
          <span>{totalItems}</span>

        </button>
      </div>

    </div>

    <div>
        <Breadcrumbs />
    </div>
    </header>
  );
}
