import LOGO from "./ResourceIMG/LOGO.png";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  // eslint-disable-next-line react/prop-types
  const { LogOut } = props;

  const handleChangeAboutMe = () => {
    const aboutMeURL = "https://www.linkedin.com/in/aimar-mendoza-29120a27a/";
    window.open(aboutMeURL, "_blank");
  };

  return (
    <div>
      <div className={styles.divNavBar}>
        <div className={styles.logoContainer}>
          <Link to={'/home'}>
            <img className={styles.logo} src={LOGO} alt="LogoRaMAPI" />
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link to={"/home"}>
            <button className={styles.button}>Home</button>
          </Link>
          <Link to={'/favorites'}>
            <button className={styles.button}>Favorites</button>
          </Link>
          <button className={styles.button} onClick={handleChangeAboutMe}>About Me</button>
          <button className={styles.buttonSO} onClick={LogOut}>Log Out</button>
        </div>
      </div>
    </div>
  );
}
