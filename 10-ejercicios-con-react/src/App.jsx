import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Ejercicio1 from './pages/Ejercicio1'
import Ejercicio2 from './pages/Ejercicio2'
import Ejercicio3 from './pages/Ejercicio3'
import Ejercicio4 from './pages/Ejercicio4'
import Ejercicio5 from './pages/Ejercicio5'
import Ejercicio6 from './pages/Ejercicio6'
import Ejercicio7 from './pages/Ejercicio7'
import Ejercicio8 from './pages/Ejercicio8'
import Ejercicio9 from './pages/Ejercicio9'
import Ejercicio10 from './pages/Ejercicio10'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="ejercicio1" element={<Ejercicio1 />} />
        <Route path="ejercicio2" element={<Ejercicio2 />} />
        <Route path="ejercicio3" element={<Ejercicio3 />} />
        <Route path="ejercicio4" element={<Ejercicio4 />} />
        <Route path="ejercicio5" element={<Ejercicio5 />} />
        <Route path="ejercicio6" element={<Ejercicio6 />} />
        <Route path="ejercicio7" element={<Ejercicio7 />} />
        <Route path="ejercicio8" element={<Ejercicio8 />} />
        <Route path="ejercicio9" element={<Ejercicio9 />} />
        <Route path="ejercicio10" element={<Ejercicio10 />} />
      </Route>
    </Routes>
  )
}

export default App