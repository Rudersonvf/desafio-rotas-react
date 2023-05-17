import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './routes/Main'
import Home from './routes/Main/Home'
import About from './routes/Main/NotFound'
import NotFound from './routes/Main/About'
import Products from './routes/Main/Products'
import Computers from './routes/Main/Products/Computers'
import Eletronics from './routes/Main/Products/Eletronics'
import Books from './routes/Main/Products/Computers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products/' element={<Products />}>
          <Route index element={<Navigate to='computers' />} />
            <Route path='computers' element={<Computers />} />
            <Route path='eletronics' element={<Eletronics />} />
            <Route path='books' element={<Books />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/not-found' element={<NotFound />} />
        </Route>
        <Route path='*' element={<Navigate to='/not-found' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
