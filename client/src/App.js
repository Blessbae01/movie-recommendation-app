import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await fetch(`http://localhost:5000/api/movies/search?q=${query}`);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎬 Movie Search App</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        style={{ padding: '0.5rem', width: '300px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '0.5rem 1rem' }}>
        Search
      </button>

      <div style={{ marginTop: '2rem' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ marginBottom: '1rem' }}>
            <h4>{movie.title}</h4>
            <p>{movie.overview || 'No description available.'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
