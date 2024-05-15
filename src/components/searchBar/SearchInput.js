import React from 'react';
import styles from './searchInput.module.css';
import { IconSearch } from '@tabler/icons-react';

const SearchInput = () => {
  const [query, setQuery] = React.useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <IconSearch className={styles.icon}/>
    </div>
  );
};

export default SearchInput;
