import logements from '../../data/logements.json'
import type { Logement } from '../../types/logement'
import './home.css'

function Home() {
    return (
        <div>
            <h1>Page d'Accueil</h1>
            Add your housing listings section
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
        </div>
    )
}

export default Home