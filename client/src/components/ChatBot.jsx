// SearchBar.jsx
import React, { useState } from 'react';
import { run } from './Bot.js'; // Adjust the import path as necessary

const SearchBar = () => {
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
        placeholder="Search..."
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>Search</button>
      {/* {response && <div style={styles.response}>{response}</div>} */}
    </div>

    {response && <div class="card" style={{overflowY: 'scroll', width: '80%'}}>
    <div class="card-body sub-heading">
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
