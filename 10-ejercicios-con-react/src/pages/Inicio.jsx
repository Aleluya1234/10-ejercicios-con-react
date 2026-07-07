import { Link } from 'react-router-dom'

function Inicio() {
  const ejercicios = [
    { numero: 1, titulo: 'Contador Interactivo', descripcion: 'Contador con botones de acción y personalización de color' },
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
      <div style={{
        textAlign: 'center',
        marginBottom: '2.5rem',
        paddingBottom: '1.5rem',
        borderBottom: '3px solid #667eea'
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          color: '#2d3748',
          margin: 0,
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Ejercicios React
        </h1>
        <p style={{
          color: '#718096',
          fontSize: '1.1rem',
          marginTop: '0.5rem'
        }}>
          Selecciona un ejercicio para ver su solucion
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {ejercicios.map((ej) => (
          <Link
            key={ej.numero}
            to={`/ejercicio${ej.numero}`}
            style={{
              display: 'block',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              textDecoration: 'none',
              color: '#2d3748',
              border: '2px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(102, 126, 234, 0.15)'
              e.currentTarget.style.borderColor = '#667eea'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
              e.currentTarget.style.borderColor = '#e2e8f0'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                padding: '0.25rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Ejercicio {ej.numero}
              </span>
              <span style={{
                color: '#667eea',
                fontSize: '1.3rem',
                fontWeight: '300'
              }}>
                →
              </span>
            </div>
            <h3 style={{
              margin: '0.5rem 0 0.25rem 0',
              color: '#2d3748',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              {ej.titulo}
            </h3>
            <p style={{
              margin: '0.25rem 0 0 0',
              color: '#718096',
              fontSize: '0.9rem',
              lineHeight: '1.5'
            }}>
              {ej.descripcion}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Inicio