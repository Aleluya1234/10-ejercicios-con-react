import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f7fafc' }}>
      <nav style={{
        padding: '1rem 2rem',
        backgroundColor: 'white',
        borderBottom: '2px solid #e2e8f0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        <Link 
          to="/" 
          style={{ 
            marginRight: '1rem',
            fontWeight: '700',
            color: '#2d3748',
            textDecoration: 'none',
            fontSize: '1.1rem',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            backgroundColor: '#667eea',
            color: 'white'
          }}
        >
          Inicio
        </Link>
        <span style={{ color: '#cbd5e0' }}>|</span>
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <Link 
            key={num}
            to={`/ejercicio${num}`} 
            style={{ 
              padding: '0.4rem 0.8rem',
              backgroundColor: '#edf2f7',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#4a5568',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#667eea'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#edf2f7'
              e.currentTarget.style.color = '#4a5568'
            }}
          >
            {num}
          </Link>
        ))}
      </nav>
      <main style={{ 
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout