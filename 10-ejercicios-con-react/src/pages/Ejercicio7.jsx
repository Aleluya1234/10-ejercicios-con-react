import { useState } from 'react'

function Ejercicio7() {
  const [busqueda, setBusqueda] = useState('')
  
  const peliculas = [
    'El Padrino',
    'El Señor de los Anillos',
    'Pulp Fiction',
    'Forrest Gump',
    'Inception',
    'Matrix',
    'Titanic',
    'Gladiador',
    'El Rey León',
    'Star Wars',
    'Avatar',
    'Interestelar',
    'El Caballero Oscuro',
    'La Lista de Schindler',
    'Cadena Perpetua'
  ]

  const peliculasFiltradas = peliculas.filter(pelicula =>
    pelicula.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div>
      <h2>Ejercicio 7: Buscador de Películas</h2>
      <p>Filtra la lista de películas mientras escribes.</p>

      <div style={{ marginTop: '2rem' }}>
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Busca una película..."
          style={{
            padding: '0.75rem',
            width: '100%',
            maxWidth: '400px',
            fontSize: '1rem',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />

        <div style={{ marginTop: '1rem' }}>
          <p><strong>Películas encontradas:</strong> {peliculasFiltradas.length}</p>
          
          {peliculasFiltradas.length === 0 ? (
            <p style={{ color: '#dc3545', fontSize: '1.2rem' }}>
              No hay resultados para "{busqueda}"
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {peliculasFiltradas.map((pelicula, index) => (
                <li 
                  key={index}
                  style={{
                    padding: '0.5rem',
                    margin: '0.25rem 0',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '4px',
                    border: '1px solid #dee2e6'
                  }}
                >
                  {pelicula}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Ejercicio7