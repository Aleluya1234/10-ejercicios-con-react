import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        marginBottom: '2rem'
      }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
      </nav>
      <main style={{ padding: '0 2rem' }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout