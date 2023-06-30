import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const statusColor = status === "Alive" ? styles.alive : styles.dead;

  const handleOnClose = () => {
    onClose(id);
  };

  return (
    <div className={styles.divCard}>
      <img className={styles.img} src={image} alt="Imagen" />
      <div>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.title}>{name}</h2>
        </Link>
        <div className={styles.details}>
          <h3 className={statusColor}>{status}</h3>
          <h3>{species}</h3>
          <h3>{gender}</h3>
          <h3>{origin.name}</h3>
        </div>
      </div>
      <button className={styles.button} onClick={handleOnClose}>X</button>
    </div>
  );
}
