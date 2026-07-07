import { useState } from 'react'

function Ejercicio10() {
  const [tema, setTema] = useState('claro')

  const temas = {
    claro: {
      fondo: '#ffffff',
      texto: '#333333',
      tarjeta: '#f8f9fa',
      borde: '#dee2e6',
      boton: '#007bff',
      botonTexto: 'white'
    },
    oscuro: {
      fondo: '#1a1a2e',
      texto: '#e9ecef',
      tarjeta: '#2d2d44',
      borde: '#4a4a6a',
      boton: '#6c63ff',
      botonTexto: 'white'
    },
    colorido: {
      fondo: '#ffeaa7',
      texto: '#2d3436',
      tarjeta: '#fdcb6e',
      borde: '#e17055',
      boton: '#e17055',
      botonTexto: 'white'
    }
  }

  const temaActual = temas[tema]

  return (
    <div style={{ 
      backgroundColor: temaActual.fondo,
      color: temaActual.texto,
      padding: '2rem',
      borderRadius: '8px',
      minHeight: '400px',
      transition: 'all 0.3s'
    }}>
      <h2>Ejercicio 10: Selector de Temas</h2>
      <p>Cambia el tema de colores de la aplicación.</p>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setTema('claro')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: tema === 'claro' ? '#007bff' : '#e9ecef',
              color: tema === 'claro' ? 'white' : '#333',
              border: '2px solid #007bff'
            }}
          >
            🌞 Claro
          </button>
          <button 
            onClick={() => setTema('oscuro')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: tema === 'oscuro' ? '#6c63ff' : '#e9ecef',
              color: tema === 'oscuro' ? 'white' : '#333',
              border: '2px solid #6c63ff'
            }}
          >
            🌙 Oscuro
          </button>
          <button 
            onClick={() => setTema('colorido')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: tema === 'colorido' ? '#e17055' : '#e9ecef',
              color: tema === 'colorido' ? 'white' : '#333',
              border: '2px solid #e17055'
            }}
          >
            🎨 Colorido
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p><strong>Tema actual:</strong> {tema.charAt(0).toUpperCase() + tema.slice(1)}</p>
          
          <div style={{
            padding: '1rem',
            backgroundColor: temaActual.tarjeta,
            border: `1px solid ${temaActual.borde}`,
            borderRadius: '8px',
            marginTop: '1rem'
          }}>
            <h3>Vista previa del tema</h3>
            <p>Este es un ejemplo de cómo se ve el tema seleccionado.</p>
            <button 
              style={{
                backgroundColor: temaActual.boton,
                color: temaActual.botonTexto,
                padding: '0.5rem 1.5rem',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Botón de ejemplo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ejercicio10