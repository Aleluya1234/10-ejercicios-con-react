import { useState } from 'react'

function Ejercicio9() {
  const [descripcion, setDescripcion] = useState('')
  const [monto, setMonto] = useState('')
  const [gastos, setGastos] = useState([])

  const agregarGasto = () => {
    if (descripcion.trim() !== '' && monto.trim() !== '') {
      const montoNum = parseFloat(monto)
      if (!isNaN(montoNum) && montoNum > 0) {
        setGastos([...gastos, { 
          id: Date.now(), 
          descripcion, 
          monto: montoNum 
        }])
        setDescripcion('')
        setMonto('')
      }
    }
  }

  const eliminarGasto = (id) => {
    setGastos(gastos.filter(g => g.id !== id))
  }

  const total = gastos.reduce((sum, gasto) => sum + gasto.monto, 0)

  return (
    <div>
      <h2>Ejercicio 9: Control de Gastos</h2>
      <p>Registra gastos y calcula el total gastado.</p>

      <div style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción del gasto"
            style={{ padding: '0.5rem', flex: 1, minWidth: '200px' }}
          />
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Monto"
            style={{ padding: '0.5rem', width: '150px' }}
          />
          <button onClick={agregarGasto}>Agregar Gasto</button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>Lista de Gastos</h3>
          {gastos.length === 0 ? (
            <p>No hay gastos registrados</p>
          ) : (
            <>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {gastos.map((gasto) => (
                  <li 
                    key={gasto.id}
                    style={{
                      padding: '0.75rem',
                      margin: '0.5rem 0',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid #dee2e6'
                    }}
                  >
                    <span>{gasto.descripcion}</span>
                    <span style={{ fontWeight: 'bold' }}>${gasto.monto.toFixed(2)}</span>
                    <button 
                      onClick={() => eliminarGasto(gasto.id)}
                      style={{ backgroundColor: '#dc3545', color: 'white', border: 'none' }}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: '#d4edda',
                borderRadius: '4px'
              }}>
                <h3>Total gastado: ${total.toFixed(2)}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Ejercicio9