import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <div>
      <h1>📚 Ejercicios React</h1>
      <p>Selecciona un ejercicio para ver su solución:</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <Link
          to="/ejercicio1"
          style={{
            display: 'block',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            textDecoration: 'none',
            color: '#333',
            border: '1px solid #dee2e6',
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Ejercicio 1
        </Link>
      </div>
    </div>
  )
}

export default Inicio