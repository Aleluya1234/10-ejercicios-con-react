import { useState } from 'react'

function Ejercicio4() {
  const [valor, setValor] = useState('')
  const [tipoConversion, setTipoConversion] = useState('km-millas')
  const [resultado, setResultado] = useState(null)

  const convertir = () => {
    const num = parseFloat(valor)
    if (isNaN(num)) {
      setResultado('Ingresa un número válido')
      return
    }

    let res
    switch(tipoConversion) {
      case 'km-millas':
        res = num * 0.621371
        setResultado(`${num} km = ${res.toFixed(2)} millas`)
        break
      case 'millas-km':
        res = num * 1.60934
        setResultado(`${num} millas = ${res.toFixed(2)} km`)
        break
      case 'c-f':
        res = (num * 9/5) + 32
        setResultado(`${num}°C = ${res.toFixed(2)}°F`)
        break
      case 'f-c':
        res = (num - 32) * 5/9
        setResultado(`${num}°F = ${res.toFixed(2)}°C`)
        break
      default:
        setResultado('Selecciona una conversión')
    }
  }

  return (
    <div>
      <h2>Ejercicio 4: Conversor de Unidades</h2>
      <p>Convierte entre unidades seleccionando la opción.</p>

      <div style={{ marginTop: '2rem' }}>
        <div>
          <label>Valor:</label><br />
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Ingresa un valor"
            style={{ padding: '0.5rem', width: '200px', marginTop: '0.5rem' }}
          />
        </div>

        <div style={{ marginTop: '1rem' }}>
          <label>Conversión:</label><br />
          <select 
            value={tipoConversion} 
            onChange={(e) => setTipoConversion(e.target.value)}
            style={{ padding: '0.5rem', marginTop: '0.5rem' }}
          >
            <option value="km-millas">KM a Millas</option>
            <option value="millas-km">Millas a KM</option>
            <option value="c-f">°C a °F</option>
            <option value="f-c">°F a °C</option>
          </select>
        </div>

        <button 
          onClick={convertir}
          style={{ padding: '0.5rem 1.5rem', marginTop: '1rem' }}
        >
          Convertir
        </button>

        {resultado && (
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            backgroundColor: '#e9ecef',
            borderRadius: '4px'
          }}>
            <h3>Resultado:</h3>
            <p style={{ fontSize: '1.2rem' }}>{resultado}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ejercicio4