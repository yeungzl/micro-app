import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

export function App() {
  return (
    <>
    <div>
    </div>
    <BrowserRouter>
      <Link to='/' className='link-button'>home</Link>
      <Link to='/my-page' className='link-button'>my-pages</Link>
      <Link to='/app1' className='link-button'>app1</Link>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path='/my-page' element={<div>123</div>} />
        <Route path='/app1' element={<><micro-app name='app1' url='http://localhost:3002/' baseroute='/app1'></micro-app></>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

