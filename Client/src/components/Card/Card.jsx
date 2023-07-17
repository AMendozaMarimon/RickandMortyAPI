/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from 'react-redux';
import { useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
function Card(props) {
  // eslint-disable-next-line react/prop-types
  const { id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorite } = props;
  const statusColor = status === "Alive" ? styles.alive : styles.dead;

  const [ isFav, setIsFav ] = useState()

  const handleOnClose = () => {
    onClose(id);
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose});
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    myFavorite.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [id, myFavorite]);

  return (
    <div className={styles.divCard}>
      <img className={styles.img} src={image} alt="Imagen" />
      <div>
        <Link to={`/detail/${id}`} className={styles.link}>
          <h2 className={styles.title}>{name}</h2>
        </Link>
        <div className={styles.details}>
          <h3 className={statusColor}>{status}</h3>
          <h3>{species}</h3>
          <h3>{gender}</h3>
          <h3>{origin.name}</h3>
        </div>
      </div>
      <div>
        <button className={styles.button} onClick={handleOnClose}>X</button>
        {
          isFav ? (
              <button className={styles.buttonFavorite} onClick={handleFavorite}>❤️</button>
          ) : (
              <button className={styles.buttonFavorite} onClick={handleFavorite}>🤍</button>
          )
        }
      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function(character) {
      dispatch(addFav(character));
    },
    removeFav: function(id) {
      dispatch(removeFav(id))
    }
  }
}

export function mapStateToProps(state) {
  return {
    myFavorite: state.myFavorite,
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(Card);