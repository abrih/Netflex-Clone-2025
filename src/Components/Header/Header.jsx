import "./Header.css";
import Netflex from "../../assets/Images/Netflex.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";



const Header = () => {

   return (
     <header className="header">
       {/* Netflix Logo */}
       <div className="logo">
         <img src={Netflex} alt="Netflix Logo" width="100" />
       </div>

       {/* Navigation Links */}
       <nav className="nav-links">
         <ul>
           <li>
             <a href="/">Home</a>
           </li>
           <li className="remvMobileview">
             <a href="/tv-shows">TV Shows</a>
           </li>
           <li className="remvMobileview">
             <a href="/movies">Movies</a>
           </li>
           <li className="remvMobileview">
             <a href="/latest">Latest</a>
           </li>
           <li className="remvMobileview">
             <a href="/my-list">My List</a>
           </li>
           <li className="remvMobileview">
             <a href="/BrowseByLanguages"> Browse by Languages</a>
           </li>
         </ul>
       </nav>

       <div className="headerRight">
         <ul>
           <li>
             <IoMdSearch />
           </li>
           <li>
             <IoIosNotificationsOutline />
           </li>
           <li>
             <RiAccountBoxLine />
           </li>
           <li
           // className="menu-toggle-btn"
           // onClick={() => setMenuOpen(!menuOpen)}
           >
             <IoMdArrowDropdown />
           </li>
         </ul>
       </div>
     </header>
   );
};

export default Header;
