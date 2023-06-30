import axios from "axios";
import IMAGEN_DETAILS from '../Details/IMAGEN_DETAILS.png';
import styles from "../Details/Details.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch(() => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
        <div className={styles.imgD}>
            <img src={IMAGEN_DETAILS} alt="IMAGEN_DETAILS" width='500px' height='500px' />
        </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={character.image} alt="Character Image" className={styles.image} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.title}>Character Details</h1>
          <h2 className={styles.name}>{character.name}</h2>
          <div className={styles.info}>
            <p> <b>ID: </b>{character.id}</p>
            <p> <b>Status: </b>{character.status}</p>
            <p> <b>Species: </b>{character.species}</p>
            <p> <b>Gender: </b>{character.gender}</p>
            {character.location && character.location.name && (
            <p>
                <b>Location: </b>
                {character.location.name}
            </p>
            )}              
            <p> <b>Created: </b>{character.created}</p>
        </div>
        </div>
      </div>
    </div>
  );
}
