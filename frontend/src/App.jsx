import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Books from './pages/Books'
import Update from './pages/Update'
import AddBook from './pages/AddBook'
import Header from './Components/Header'


function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Books/>}/>
          <Route path='/addbook' element={<AddBook/>}/>
          <Route path='/update/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
