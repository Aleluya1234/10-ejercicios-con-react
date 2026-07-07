import { useState } from 'react'

function Ejercicio2() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [edad, setEdad] = useState('')
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre && email && edad) {
      setUsuarioRegistrado({ nombre, email, edad })
    }
  }

  const limpiarFormulario = () => {
    setNombre('')
    setEmail('')
    setEdad('')
    setUsuarioRegistrado(null)
  }

  return (
    <div>
      <h2>Ejercicio 2: Formulario de Registro Simple</h2>
      <p>Formulario para registrar un usuario en pantalla.</p>

      <div style={{ marginTop: '2rem' }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nombre:</label><br />
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingresa tu nombre"
              style={{ width: '100%', padding: '0.5rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Email:</label><br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              style={{ width: '100%', padding: '0.5rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Edad:</label><br />
            <input
              type="number"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
              placeholder="Ingresa tu edad"
              style={{ width: '100%', padding: '0.5rem' }}
              required
            />
          </div>

          <button type="submit" style={{ padding: '0.5rem 1.5rem', marginRight: '0.5rem' }}>
            Registrar
          </button>
          <button type="button" onClick={limpiarFormulario} style={{ padding: '0.5rem 1.5rem' }}>
            Limpiar
          </button>
        </form>

        {usuarioRegistrado && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            backgroundColor: '#d4edda',
            borderRadius: '4px'
          }}>
            <h3>Usuario Registrado:</h3>
            <p><strong>Nombre:</strong> {usuarioRegistrado.nombre}</p>
            <p><strong>Email:</strong> {usuarioRegistrado.email}</p>
            <p><strong>Edad:</strong> {usuarioRegistrado.edad}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ejercicio2