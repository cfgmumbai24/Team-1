// SearchBar.jsx
import React, { useState } from 'react';
import { run } from './Bot.js'; // Adjust the import path as necessary
import { useLanguage } from '../contexts/languageContext';
import data from '../../data';

const SearchBar = () => {
  const {language, setLanguage} = useLanguage()
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [search,setSearch] = useState('')
//   var search = ""
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    // search = event.target.value
    setSearch(event.target.value)

  };

  const handleSearch = async () => {
    console.log("in search "+search)
    const result = await run(search);
    setResponse(result);
    
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <div style={styles.searchBarContainer}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder=""
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>{data[2]['search'][language]}</button>
      {/* {response && <div style={styles.response}>{response}</div>} */}
    </div>

    {response && <div style={{marginLeft: '50%', transform: 'translateX(-50%)', display: 'flex', overflowY: 'scroll', width: '80%', background: 'white', padding: '12.5px', borderRadius: '12px', justifyContent: 'center'}}>
    <div>
    {response}
  </div>
</div>}
    </>
  );
};

const styles = {
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    flex: '1',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    marginTop: '10px',
  },
  response: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    width: '80%',
  },
};

export default SearchBar;
