import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   // eslint-disable-next-line react/prop-types
   const { onSearch } = props;

   const [ id, setId ] = useState('');

   const handleChange = e => {
      const { value } = e.target;
      setId(value);
   }

   return (
      <div className={styles.divBotton}>
         <input className={styles.searchInput}
                placeholder="Introduzca el ID del personaje..." 
                type='search' 
                onChange={handleChange}
                value={id}/>
         <button className={styles.button} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
