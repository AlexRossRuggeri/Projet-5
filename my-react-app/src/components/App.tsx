import logements from '../data/logements.json'; // Renamed to plural for clarity
import type { Logement } from '../types/logement'; // Import type
import '../App.css';
import Header from './Header';

function App() {

  return (
    <>
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