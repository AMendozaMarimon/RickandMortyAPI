import SearchBar from "./SearchBar/SearchBar";
import Title from "./Title/Title.jsx";
import NavBar from "./NavBar/NavBar";
import { useLocation } from "react-router-dom";
  
export default function Nav(props){
  // eslint-disable-next-line react/prop-types
  const { onSearch, LogOut } = props;

  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav>
      <NavBar LogOut={LogOut}/>
      <Title />
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
