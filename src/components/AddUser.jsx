import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Button from './Button'
import TextField from './TextField'
import { addUser } from './userSlice'

function AddUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const handleAddUser = () => {
        setValues({ name: '', email: '' })
        dispatch(addUser({
            id: uuidv4(),
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
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser