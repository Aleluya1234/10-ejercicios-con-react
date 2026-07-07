import { useState } from 'react'

function Ejercicio5() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  const calcular = (operacion) => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    
    if (isNaN(a) || isNaN(b)) {
      setError('Ingresa números válidos')
      setResultado(null)
      return
    }

    setError('')
    let res
    switch(operacion) {
      case 'suma':
        res = a + b
        break
      case 'resta':
        res = a - b
        break
      case 'multiplicacion':
        res = a * b
        break
      case 'division':
        if (b === 0) {
          setError('No se puede dividir entre 0')
          setResultado(null)
          return
        }
        res = a / b
        break
      default:
        return
    }
    setResultado(res)
  }

  const limpiar = () => {
    setNum1('')
    setNum2('')
    setResultado(null)
    setError('')
  }

  return (
    <div>
      <h2>Ejercicio 5: Calculadora Simple</h2>
      <p>Calculadora básica con operaciones matemáticas.</p>

      <div style={{ marginTop: '2rem' }}>
        <div>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Número 1"
            style={{ padding: '0.5rem', width: '150px', marginRight: '0.5rem' }}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Número 2"
            style={{ padding: '0.5rem', width: '150px' }}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button onClick={() => calcular('suma')} style={{ margin: '0.25rem', padding: '0.5rem 1.5rem' }}>+</button>
          <button onClick={() => calcular('resta')} style={{ margin: '0.25rem', padding: '0.5rem 1.5rem' }}>-</button>
          <button onClick={() => calcular('multiplicacion')} style={{ margin: '0.25rem', padding: '0.5rem 1.5rem' }}>×</button>
          <button onClick={() => calcular('division')} style={{ margin: '0.25rem', padding: '0.5rem 1.5rem' }}>÷</button>
          <button onClick={limpiar} style={{ margin: '0.25rem', padding: '0.5rem 1.5rem', backgroundColor: '#dc3545', color: 'white' }}>Limpiar</button>
        </div>

        {error && (
          <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>
        )}

        {resultado !== null && !error && (
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            backgroundColor: '#d4edda',
            borderRadius: '4px'
          }}>
            <h3>Resultado:</h3>
            <p style={{ fontSize: '1.5rem' }}>{resultado}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ejercicio5