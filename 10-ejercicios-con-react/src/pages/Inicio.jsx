import { Link } from 'react-router-dom'

function Inicio() {
  const ejercicios = [
    { numero: 1, titulo: 'Contador Interactivo', descripcion: 'Contador con botones de acción y personalización' },
    { numero: 2, titulo: 'Formulario de Registro', descripcion: 'Registra usuarios en pantalla' },
    { numero: 3, titulo: 'Lista de Tareas', descripcion: 'Administra tus tareas diarias' },
    { numero: 4, titulo: 'Conversor de Unidades', descripcion: 'Convierte entre km/millas y °C/°F' },
    { numero: 5, titulo: 'Calculadora Simple', descripcion: 'Operaciones matemáticas básicas' },
    { numero: 6, titulo: 'Tienda de Cafés', descripcion: 'Agrega productos al carrito' },
    { numero: 7, titulo: 'Buscador de Películas', descripcion: 'Filtra películas mientras escribes' },
    { numero: 8, titulo: 'Generador de Frases', descripcion: 'Frases aleatorias con un botón' },
    { numero: 9, titulo: 'Control de Gastos', descripcion: 'Registra y calcula gastos' },
    { numero: 10, titulo: 'Selector de Temas', descripcion: 'Cambia el tema de colores' }
  ]

  return (
    <div>
      <h1>📚 Ejercicios React</h1>
      <p style={{ color: '#6c757d' }}>Selecciona un ejercicio para ver su solución:</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {ejercicios.map((ej) => (
          <Link
            key={ej.numero}
            to={`/ejercicio${ej.numero}`}
            style={{
              display: 'block',
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#333',
              border: '1px solid #dee2e6',
              transition: 'all 0.2s',
              hover: {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }
            }}
          >
            <h3 style={{ margin: 0, color: '#007bff' }}>Ejercicio {ej.numero}</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
              <strong>{ej.titulo}</strong>
            </p>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#6c757d' }}>
              {ej.descripcion}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Inicio