import MenuIcon from "@icons/MenuIcon";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <div className=" bg-emerald-600 text-emerald-50 w-full flex justify-center items-center py-2 px-5">
      <img src="" alt="logo" />
      <h1 className="text-4xl flex-1 text-center">Focusly</h1>
      <div className="relative">
        <nav className="hidden sm:block">
          <ul className="flex">
            <li className="p-2">Focus</li>
            <li className="p-2">Stats</li>
            <li className="p-2">Account</li>
          </ul>
        </nav>
        <button className="sm:hidden">
          <MenuIcon />
        </button>
      </div>
      
    </div>
  );
};

export default Header;