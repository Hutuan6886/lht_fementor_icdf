import './App.css'

import { Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import HomeLayout from './layouts/HomeLayout'
import Thanks from './components/Thanks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Form />} />
        <Route path='submit-successfully' element={<Thanks />} />
      </Route>
    </Routes>
  )
}

export default App
