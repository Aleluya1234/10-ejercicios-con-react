import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '1rem'
    }}>
      <nav style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        marginBottom: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        alignItems: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,255,255,0.3)'
      }}>
        <Link 
          to="/" 
          style={{ 
            marginRight: '0.75rem',
            fontWeight: '700',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '0.5rem 1.2rem',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Inicio
        </Link>
        
        <span style={{ color: '#cbd5e0', fontWeight: '300' }}>|</span>
        
        {[1,2,3,4,5,6,7,8,9,10].map(num => (
          <Link 
            key={num}
            to={`/ejercicio${num}`} 
            style={{ 
              padding: '0.4rem 0.9rem',
              backgroundColor: '#edf2f7',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#4a5568',
              fontSize: '0.85rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              border: '1px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#667eea'
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#edf2f7'
              e.currentTarget.style.color = '#4a5568'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {num}
          </Link>
        ))}
      </nav>
      
      <main style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        border: '1px solid rgba(255,255,255,0.3)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout