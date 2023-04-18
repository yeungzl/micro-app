import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <>
    <div>
    </div>
    <BrowserRouter>
      <Link to='/'>home</Link>
      <Link to='/my-page'>my-pages</Link>
      <Link to='/app1'>app1</Link>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path='/my-page' element={<div>123</div>} />
        <Route path='/app1' element={<><micro-app name='app1' url='http://localhost:3000/' baseroute='/app1'></micro-app></>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

