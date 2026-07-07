import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Ejercicio1 from './pages/Ejercicio1'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="ejercicio1" element={<Ejercicio1 />} />
      </Route>
    </Routes>
  )
}

export default App