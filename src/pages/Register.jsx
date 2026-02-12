import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { registerValidator } from '../validators/registeer.validator';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        tel: '',
    }
    )

    const [error, setError] = useState(null)

    const hdlChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
        // console.log(name, value)
    };

    const navigate = useNavigate()

    const hdlSubmit = async (evt) => {
        evt.preventDefault();
        setError({})
        const result = registerValidator.safeParse(formData)
        if (!result.success) {
            const { fieldErrors } = result.error.flatten()
            console.log(fieldErrors)
            setError(fieldErrors)
            return;
        }
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            console.log("Register Succesfull", res.data)
            toast.success("Reegister Successful")
            navigate('/post')
        } catch (error) {
            console.log('err')
            toast.error("Register Error")
        }

    }

    console.log("error", error)
    return (
        <div className='text-2xl font-semibold flex justify-center'>
            <form onSubmit={hdlSubmit} className='w-2xl flex flex-col' action="">
                <label className='flex justify-center gap-3'>Username</label>
                <input name='username' onChange={hdlChange} className='border-2 border-gray-400' placeholder='Please input your username...' value={formData.username} />
                {error?.username && <p className='text-red-500'>{error.username[0]}</p>}

                <label className='flex justify-center gap- mt-3'>Password</label>
                <input name='password' onChange={hdlChange} className='border-2 border-gray-400' type='password' placeholder='Please input your password...' value={formData.password} />
                {error?.password && <p className='text-red-500'>{error.password[0]}</p>}

                <label className='flex justify-center gap- mt-3'>E-mail</label>
                <input name='email' onChange={hdlChange} className='border-2 border-gray-400' type='text' placeholder='Please input your email...' value={formData.email} />
                {error?.email && <p className='text-red-500'>{error.email[0]}</p>}

                <label className='flex justify-center gap- mt-3'>Tel</label>
                <input name='tel' onChange={hdlChange} className='border-2 border-gray-400' placeholder='Please input your phone number...' value={formData.tel} />
                {error?.tel && <p className='text-red-500'>{error.tel[0]}</p>}

                <button className='bg-gray-500 p-2 rounded-2xl mt-5'>Submit</button>
            </form>
        </div>
    )
}

export default Register