import styles from "../Form/Form.module.css";
import { useState } from "react";
import validation from "./validation";

export default function Form(props) {
  // eslint-disable-next-line react/prop-types
  const { login } = props;

    const [ userData, setUserData ] = useState({
        email: '',
        password: '',
    });

    const [ errors, setErrors ] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
        const validationErrors = validation(userData);
        setErrors(validationErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://fondosmil.com/fondo/27346.png"
          alt=""
          className={styles.image}
        />
      </div>
      <div className={styles.card}>
        <form onSubmit={handleSubmit}>
          <h1>Hola! 👍✨</h1>
          <label>Email: </label>
          <input type="text" name="email" value={userData.email} onChange={handleChange} placeholder="Enter your email..." />
          {errors.email && <p className={styles.p}>{errors.email}</p>}
          <label>Password: </label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Enter your password..." />
          {errors.password && <p className={styles.p}>{errors.password}</p>}
          <button type="submit" >Log In</button>
        </form>
      </div>
    </div>
  );
}
