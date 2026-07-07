import { useState } from 'react'

function Ejercicio8() {
  const [frases, setFrases] = useState([
    'La vida es lo que pasa mientras estás ocupado haciendo otros planes.',
    'No cuentes los días, haz que los días cuenten.',
    'El único modo de hacer un gran trabajo es amar lo que haces.',
    'La mejor manera de predecir el futuro es crearlo.',
    'El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el valor para continuar.'
  ])
  
  const [fraseActual, setFraseActual] = useState(frases[0])
  const [nuevaFrase, setNuevaFrase] = useState('')

  const obtenerFraseAleatoria = () => {
    const indice = Math.floor(Math.random() * frases.length)
    setFraseActual(frases[indice])
  }

  const agregarFrase = () => {
    if (nuevaFrase.trim() !== '') {
      setFrases([...frases, nuevaFrase])
      setNuevaFrase('')
    }
  }

  return (
    <div>
      <h2>Ejercicio 8: Generador de Frases</h2>
      <p>Muestra frases aleatorias al presionar un botón.</p>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <div style={{
          padding: '2rem',
          backgroundColor: '#e9ecef',
          borderRadius: '8px',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
            "{fraseActual}"
          </p>
        </div>

        <button 
          onClick={obtenerFraseAleatoria}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem'
          }}
        >
          Otra Frase
        </button>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #dee2e6', paddingTop: '2rem' }}>
          <h3>Agregar Nueva Frase</h3>
          <div>
            <input
              type="text"
              value={nuevaFrase}
              onChange={(e) => setNuevaFrase(e.target.value)}
              placeholder="Escribe una nueva frase"
              style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
            />
            <button onClick={agregarFrase}>Agregar</button>
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#6c757d' }}>
            Total de frases: {frases.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ejercicio8