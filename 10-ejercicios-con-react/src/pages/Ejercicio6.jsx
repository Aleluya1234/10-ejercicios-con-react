import { useState } from 'react'

function Ejercicio6() {
  const [carrito, setCarrito] = useState([])
  
  const productos = [
    { id: 1, nombre: 'Café Americano', precio: 2.50 },
    { id: 2, nombre: 'Café Latte', precio: 3.00 },
    { id: 3, nombre: 'Café Mocha', precio: 3.50 },
    { id: 4, nombre: 'Capuchino', precio: 3.25 },
    { id: 5, nombre: 'Té Chai', precio: 2.75 }
  ]

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(item => item.id === producto.id)
    if (existente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id 
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ))
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id))
  }

  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

  return (
    <div>
      <h2>Ejercicio 6: Tienda de Cafés</h2>
      <p>Selecciona productos para agregar al carrito.</p>

      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h3>Productos</h3>
          {productos.map(producto => (
            <div 
              key={producto.id}
              style={{
                padding: '0.5rem',
                margin: '0.5rem 0',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{producto.nombre} - ${producto.precio.toFixed(2)}</span>
              <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            </div>
          ))}
        </div>

        <div style={{ flex: 1 }}>
          <h3>Carrito</h3>
          {carrito.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <>
              {carrito.map(item => (
                <div 
                  key={item.id}
                  style={{
                    padding: '0.5rem',
                    margin: '0.5rem 0',
                    backgroundColor: '#e9ecef',
                    borderRadius: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{item.nombre} x{item.cantidad} - ${(item.precio * item.cantidad).toFixed(2)}</span>
                  <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                </div>
              ))}
              <div style={{ 
                marginTop: '1rem', 
                padding: '1rem', 
                backgroundColor: '#d4edda',
                borderRadius: '4px'
              }}>
                <strong>Total a pagar: ${total.toFixed(2)}</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Ejercicio6