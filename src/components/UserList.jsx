import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { store } from '../store';
import Button from './Button';
import { deleteUser } from './userSlice';

function UserList() {
    const users = useSelector(store => store.users)
    const dispatch = useDispatch()
    const handleEdit = () => {
        console.log('updating');
    }
    const handleRemoveUser = (id) => {
        console.log('deleting');

        dispatch(deleteUser({ id }))
    }
    const renderCard = () => users.map(user => (
        <div key={user.id} className='bg-gray-300 p-5 flex items-center justify-between'>
            <div>
                <h3 className='font-bold text-lg text-gray-700'>{user.name}</h3>
                <span className='font-normal text-gray-600'>{user.email}</span>
            </div>
            <div className='flex gap-3'>
                <Link to={`edit-user/${user.id}`}>
                    <button className='mx-2 cursor-pointer' onClick={handleEdit}>Edit</button>
                </Link>
                <button className='cursor-pointer mx-2' onClick={() => handleRemoveUser(user.id)}>Delete</button>
            </div>
        </div>
    ))
    return (
        <div>
            <Link to='/addUser'>
                <Button>Add User</Button>
            </Link>
            <div className='grid gap-5 md:grid-cols-2'>
                {users.length
                    ? renderCard()
                    : <p className='text-center col-span-2 text-gray-700 font-semibold'>No User</p>}
            </div>
        </div>
    )
}

export default UserList