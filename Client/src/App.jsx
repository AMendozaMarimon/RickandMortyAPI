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
  const [ access, setAccess ] = useState(false);
  const EMAIL = 'aymarprueba1@gmail.com';
  const PASSWORD = 'aimar02';

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Email or Password are incorrect!')
    }
  };

  const LogOut = () => {
    setAccess(false);
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  const onSearch = (id) => {
    const characterId = parseInt(id);
    const existingCharacter = characters.find(
      (character) => character.id === characterId
    );
    if (existingCharacter) {
      window.alert("The character has already been added!");
      return;
    }

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch(() => {
        window.alert("There are no characters with this ID!");
      });
  };

  const onClose = id => {
    setCharacters((oldChars) =>
      oldChars.filter((char) => char.id !== Number(id))
    );
  };

  return (
    <div>
        <Nav onSearch={onSearch} LogOut={LogOut}/>
        <Routes>
          <Route path="/" element={<Form login={login}/>}/>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path="/detail/:id" element={<Details />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
    </div>
  );
}

export default App;
