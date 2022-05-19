import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovie';

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center">FILM SEARCH</h1>
                <SearchMovies />
            </div>
        </div>
    );
}

export default App;