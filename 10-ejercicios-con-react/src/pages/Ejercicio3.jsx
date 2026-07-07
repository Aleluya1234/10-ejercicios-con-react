import { useState } from 'react'

function Ejercicio3() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }])
      setTarea('')
    }
  }

  const toggleCompletada = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ))
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id))
  }

  return (
    <div>
      <h2>Ejercicio 3: Lista de Tareas</h2>
      <p>Administra tus tareas diarias.</p>

      <div style={{ marginTop: '2rem' }}>
        <div>
          <input
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder="Escribe una tarea"
            style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }}
          />
          <button onClick={agregarTarea}>Agregar</button>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <p><strong>Total de tareas:</strong> {tareas.length}</p>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          {tareas.map((t) => (
            <li 
              key={t.id}
              style={{
                padding: '0.5rem',
                margin: '0.5rem 0',
                backgroundColor: t.completada ? '#d4edda' : '#f8f9fa',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #dee2e6'
              }}
            >
              <span 
                onClick={() => toggleCompletada(t.id)}
                style={{
                  textDecoration: t.completada ? 'line-through' : 'none',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                {t.completada ? '✅' : '⬜'} {t.texto}
              </span>
              <button 
                onClick={() => eliminarTarea(t.id)}
                style={{ backgroundColor: '#dc3545', color: 'white', border: 'none' }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Ejercicio3