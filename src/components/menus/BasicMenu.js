import { Link } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useState } from "react";

const BasicMenu = () => {
  const { loginState } = useCustomLogin();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="navbar" className="flex bg-blue-300">
      <div className="w-full bg-gray-500">
        <div className="flex justify-between items-center p-4 md:hidden">
          <button className="block text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776; {/* 햄버거 아이콘 */}
          </button>
          {/*<div className="text-white font-bold text-2xl">Menu</div>*/}
        </div>
        <ul className={`${menuOpen ? "block" : "hidden"} md:flex p-4 text-white font-bold`}>
          <li className="pr-6 text-2xl">
            <Link to={"/"}>Main</Link>
          </li>
          <li className="pr-6 text-2xl">
            <Link to={"/about"}>About</Link>
          </li>

          {loginState.email ? ( // 로그인한 사용자에게만 보여지는 메뉴
            <>
              <li className="pr-6 text-2xl">
                <Link to={"/todo/"}>Todo</Link>
              </li>
              <li className="pr-6 text-2xl">
                <Link to={"/products/"}>Products</Link>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>

      <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
        {!loginState.email ? (
          <div className="text-white text-sm m-1 rounded">
            <Link to={"/member/login"}>Login</Link>
          </div>
        ) : (
          <div className="text-white text-sm m-1 rounded">
            <Link to={"/member/logout"}>Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default BasicMenu;
