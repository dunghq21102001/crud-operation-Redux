import { Routes, Route } from 'react-router-dom'
import './App.css'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import UserList from './components/UserList'

function App() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center font-bold text-2xl text-gray-700'>CRUD with reedux toolkit</h1>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>

    </div>
  )
}

export default App
