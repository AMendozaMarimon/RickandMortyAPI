import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Details from "./components/Details/Details.jsx";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const characterId = parseInt(id);
    const existingCharacter = characters.find(
      (character) => character.id === characterId
    );
    if (existingCharacter) {
      window.alert("¡El personaje ya ha sido agregado!");
      return;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch(() => {
        window.alert("¡No hay personajes con este ID!");
      });
  };

  const onClose = (id) => {
    setCharacters((oldChars) =>
      oldChars.filter((char) => char.id !== Number(id))
    );
  };

  return (
    <div className="App">
        <Nav onSearch={onSearch} />
        <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path="/detail/:id" element={<Details />}/>
        </Routes>
    </div>
  );
}

export default App;
