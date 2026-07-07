import { useState } from 'react'

function Ejercicio1() {
  const [contador, setContador] = useState(0)
  const [color, setColor] = useState('#007bff')

  const coloresDisponibles = [
    { nombre: 'Azul', valor: '#007bff' },
    { nombre: 'Rojo', valor: '#dc3545' },
    { nombre: 'Verde', valor: '#28a745' },
    { nombre: 'Amarillo', valor: '#ffc107' },
    { nombre: 'Morado', valor: '#6f42c1' },
    { nombre: 'Naranja', valor: '#fd7e14' },
    { nombre: 'Rosa', valor: '#e83e8c' },
    { nombre: 'Cian', valor: '#17a2b8' }
  ]

  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const reiniciar = () => {
    setContador(0)
  }

  return (
    <div>
      <h2 style={{ color: '#2d3748', borderBottom: '3px solid #007bff', paddingBottom: '0.5rem' }}>
        Ejercicio 1: Contador Interactivo
      </h2>
      <p style={{ color: '#4a5568' }}>Contador con botones de acción y personalización de color.</p>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        border: `3px solid ${color}`
      }}>
        <h1 style={{ 
          fontSize: '5rem', 
          color: color,
          fontWeight: '700',
          margin: '0.5rem 0'
        }}>
          {contador}
        </h1>
        
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={incrementar} style={{ 
            backgroundColor: color, 
            color: 'white',
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            + Incrementar
          </button>
          <button onClick={decrementar} style={{ 
            backgroundColor: color, 
            color: 'white',
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            - Decrementar
          </button>
        </div>
        
        <div style={{ marginTop: '1rem' }}>
          <button onClick={reiniciar} style={{ 
            padding: '0.5rem 1.5rem',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            backgroundColor: 'white',
            fontWeight: '500'
          }}>
            Reiniciar
          </button>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '2px solid #e2e8f0', paddingTop: '1.5rem' }}>
          <p style={{ color: '#4a5568', marginBottom: '0.75rem', fontWeight: '500' }}>
            Selecciona un color para el contador:
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {coloresDisponibles.map((c) => (
              <button
                key={c.valor}
                onClick={() => setColor(c.valor)}
                style={{
                  backgroundColor: c.valor,
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  border: color === c.valor ? '4px solid #2d3748' : '2px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  transform: color === c.valor ? 'scale(1.1)' : 'scale(1)'
                }}
                title={c.nombre}
              />
            ))}
          </div>
          <p style={{ color: '#718096', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Color seleccionado: <strong style={{ color: color }}>{coloresDisponibles.find(c => c.valor === color)?.nombre || 'Personalizado'}</strong>
          </p>
        </div>
        
        {contador === 0 && (
          <p style={{ marginTop: '1rem', color: '#718096', fontStyle: 'italic' }}>
            El contador está en cero
          </p>
        )}
      </div>
    </div>
  )
}

export default Ejercicio1