import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import logements from './data/logements.json'; // Renamed to plural for clarity
import type { Logement } from './types/logement'; // Import type
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Keep existing logo/counter section */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Add your housing listings section */}
      <section className="listings">
        <h2>Available Properties</h2>
        <div className="logements-grid">
          {logements.map((logement: Logement) => (
            <article key={logement.id} className="logement-card">
              <img 
                src={logement.cover} 
                alt={logement.title}
                className="logement-cover"
              />
              <h3>{logement.title}</h3>
              <p>{logement.location}</p>
              <div className="tags">
                {logement.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;