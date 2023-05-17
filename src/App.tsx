import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './routes/Main'
import Home from './routes/Main/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
