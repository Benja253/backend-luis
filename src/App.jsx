import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import PostId from './pages/postId/PostId'
import ProtectedRoutes from './pages/shared/ProtectedRoutes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPostThunk } from './store/slices/posts.slice'
import { getMyPostsThunk } from './store/slices/myPosts.slice'
import Header from './components/shared/Header'

function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllPostThunk())
  //   dispatch(getMyPostsThunk())
  // }, [])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/post/:id' element={<PostId />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<h1>Esta ruta no existe</h1>} />
      </Routes>
    </div>
  )
}

export default App
