import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './routes/Main'
import Home from './routes/Main/Home'
import About from './routes/Main/NotFound'
import NotFound from './routes/Main/About'
import Products from './routes/Main/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/not-found' element={<NotFound />} />
        </Route>
        <Route path='*' element={<Navigate to='/not-found' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
