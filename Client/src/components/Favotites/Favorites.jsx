import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

export default function Favorites() {
  const myFavorite = useSelector((state) => state.myFavorite);

  return (
    <div>
      <h1 className={styles.Title}>✨ My Favorites ✨</h1>
      <div className={styles.favorites}>
        {myFavorite?.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
}
