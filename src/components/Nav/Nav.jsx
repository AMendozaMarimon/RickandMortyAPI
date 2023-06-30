import SearchBar from "./SearchBar/SearchBar";
import Title from "./Title/Title.jsx";
import NavBar from "./NavBar/NavBar";

export default function Nav(props){
  // eslint-disable-next-line react/prop-types
  const { onSearch } = props;

  return (
    <nav>
      <NavBar />
      <Title />
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
