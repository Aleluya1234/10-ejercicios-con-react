import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>🏠 Inicio</Link>
        <span style={{ color: '#6c757d' }}>|</span>
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <Link 
            key={num}
            to={`/ejercicio${num}`} 
            style={{ 
              marginRight: '0.25rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: '#e9ecef',
              borderRadius: '4px',
              textDecoration: 'none',
              color: '#333',
              fontSize: '0.9rem'
            }}
          >
            Ej. {num}
          </Link>
        ))}
      </nav>
      <main style={{ padding: '0 2rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout