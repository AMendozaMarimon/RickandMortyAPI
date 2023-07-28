import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Details from "./components/Details/Details.jsx";
import { useState, useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import Favorites from "./components/Favotites/Favorites.jsx";

function App() {
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = `http://localhost:3001/user/login/?email=${email}&password=${password}`;
      const { data } = await axios.get(URL);
      const { access } = data;

      if (access) {
        setAccess(access);
        navigate("/home");
      } else {
        window.alert("The email or password is incorrect");
      }
    } catch (error) {
      console.error(error);
      window.alert("An error occurred while logging in");
    }
  }

  const LogOut = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const characterId = parseInt(id);
      const existingCharacter = characters.find(
        (character) => character.id === characterId
      );

      if (existingCharacter) {
        window.alert("The character has already been added!");
        return;
      }

      const { data } = await axios(`http://localhost:3001/characters/${id}`);

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      console.error(error);
      window.alert("An error occurred while searching for the character!");
    }
  };

  const onClose = (id) => {
    setCharacters((oldChars) =>
      oldChars.filter((char) => char.id !== Number(id))
    );
  };

  return (
    <div>
      <Nav onSearch={onSearch} LogOut={LogOut} />
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
