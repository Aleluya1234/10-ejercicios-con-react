import { useState } from 'react'

function Ejercicio1() {
  const [contador, setContador] = useState(0)
  const [color, setColor] = useState('#007bff')

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

  const cambiarColor = () => {
    const colores = ['#007bff', '#dc3545', '#28a745', '#ffc107', '#6f42c1', '#fd7e14']
    const colorActual = colores[Math.floor(Math.random() * colores.length)]
    setColor(colorActual)
  }

  return (
    <div>
      <h2>Ejercicio 1: Contador Interactivo</h2>
      <p>Contador con botones de acción y personalización.</p>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem',
        padding: '2rem',
        border: `2px solid ${color}`,
        borderRadius: '8px'
      }}>
        <h1 style={{ 
          fontSize: '4rem', 
          color: color
        }}>
          {contador}
        </h1>
        
        <div>
          <button onClick={incrementar} style={{ 
            backgroundColor: color, 
            color: 'white',
            padding: '0.5rem 1.5rem',
            margin: '0.5rem'
          }}>
            + Incrementar
          </button>
          <button onClick={decrementar} style={{ 
            backgroundColor: color, 
            color: 'white',
            padding: '0.5rem 1.5rem',
            margin: '0.5rem'
          }}>
            - Decrementar
          </button>
        </div>
        
        <div>
          <button onClick={reiniciar} style={{ 
            padding: '0.5rem 1.5rem',
            margin: '0.5rem'
          }}>
            Reiniciar
          </button>
          <button onClick={cambiarColor} style={{ 
            padding: '0.5rem 1.5rem',
            margin: '0.5rem'
          }}>
            Cambiar Color
          </button>
        </div>
        
        {contador === 0 && <p style={{ marginTop: '1rem' }}>¡El contador está en 0!</p>}
      </div>
    </div>
  )
}

export default Ejercicio1