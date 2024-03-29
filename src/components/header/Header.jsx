import React, { useEffect, useState } from "react";
import "./style.scss";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  const controllNavbar = () => {
    if(window.scrollY>200){
      if(window.screenY>lastScrollY && !mobileMenu){
        setShow("hide")
      }
      else{
        setShow("show")
      }
      
    }
    else{
      setShow("top")
    }
    setLastScrollY(window.screenY)
  }
  useEffect(() => {
    window.addEventListener('scroll', controllNavbar)
    return ()=>window.removeEventListener('scroll', controllNavbar);
  }, [lastScrollY])
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  const handleSearchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch;
      }, 1000);
    }
  };
  const navigationHandler = (type) => {
    if(type==="movie"){
      navigate("/explore/movie")
    }
    else{
      navigate("/explore/tv")
    }
    setMobileMenu(false)
  }
  return (
    <div className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo"onClick={()=>navigate('/')}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={()=>navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearchQuery}
              type="text"
              placeholder="Search for a movies or tv shows....."
            />
            <div className="close" onClick={() => setShowSearch(false)}><VscChromeClose className="icon"/></div>
          </div>
        </ContentWrapper>
      </div>}
    </div>
  );
};

export default Header;
