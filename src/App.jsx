import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Restaurant</h1>
        <img
          src="https://example.com/restaurant.jpg"
          className="App-image"
          alt="Restaurant"
        />
        <p>
          Experience the best dining with us. We offer a variety of dishes made with the freshest ingredients.
        </p>
        <button className="App-button">Explore Menu</button>
      </header>
    </div>
  );
}

export default App;
