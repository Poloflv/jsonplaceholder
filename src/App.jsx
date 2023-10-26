import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Users from './pages/Users'
import UserDetail from './pages/UserDetail'
import Page404 from './pages/Page404'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route element={<PrivateRoutes/>}>
        <Route path='/user' element={<Users/>} />
        <Route path='/user/:userId' element={<UserDetail/>} />
      </Route>

      <Route path='*' element={<Page404/>} />
    </Routes>
  )
}

export default App
