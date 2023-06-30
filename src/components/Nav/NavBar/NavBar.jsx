import LOGO from "./ResourceIMG/LOGO.png";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const handleChangeAboutMe = () => {
    const aboutMeURL = "https://www.linkedin.com/in/aimar-mendoza-29120a27a/";
    window.open(aboutMeURL, "_blank");
  };

  return (
    <div>
      <div className={styles.divNavBar}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={LOGO} alt="LogoRaMAPI" />
        </div>
        <div className={styles.buttonContainer}>
          <Link to={"/home"}>
            <button className={styles.buttonHM}>Home</button>
          </Link>
          <button className={styles.buttonF}>Favorites</button>
          <button className={styles.buttonAM} onClick={handleChangeAboutMe}>About Me</button>
        </div>
      </div>
    </div>
  );
}
