import { useState } from 'react';
import styles from './SearchBar.module.css';
import { useLocation } from 'react-router-dom';

export default function SearchBar(props) {
   // eslint-disable-next-line react/prop-types
   const { onSearch } = props;

   const location = useLocation();
   if (location.pathname === '/favorites') {
      return null;
   }

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const [ id, setId ] = useState('');

   const handleChange = e => {
      const { value } = e.target;
      setId(value);
   }

   return (
      <div className={styles.divBotton}>
         <input className={styles.searchInput}
                placeholder="Enter character ID..." 
                type='search' 
                onChange={handleChange}
                value={id}/>
         <button className={styles.button} onClick={() => onSearch(id)}>Search</button>
      </div>
   );
}
