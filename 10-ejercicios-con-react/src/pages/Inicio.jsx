function Inicio() {
  return (
    <div>
      <h1>📚 Ejercicios React</h1>
      <p>Aquí aparecerán los enlaces a todos los ejercicios.</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        <p>Esperando ejercicios...</p>
      </div>
    </div>
  )
}

export default Inicio