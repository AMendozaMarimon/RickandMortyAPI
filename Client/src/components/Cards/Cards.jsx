/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../Card/Card.jsx";
import styles from "../Cards/Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={styles.Cards}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          onClose={onClose}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
        />
      ))}
    </div>
  );
}
