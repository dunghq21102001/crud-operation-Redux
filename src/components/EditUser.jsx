import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button'
import TextField from './TextField'
import { editUser } from './userSlice';

function EditUser() {
    const params = useParams()
    const users = useSelector(store => store.users)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const existingUser = users.filter(user => user.id === params.id)
    const { name, email } = existingUser[0]
    const [values, setValues] = useState({
        name,
        email
    })

    const handleEditUser = () => {
        setValues({ name: '', email: '' })
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }))
        navigate('/')
    }

    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField label='name' inputProps={{ type: 'text', placeholder: 'Jhon doe' }} value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} />
            <br />
            <TextField label='email' inputProps={{ type: 'email', placeholder: 'JhonDoe@gmail.com' }} value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser